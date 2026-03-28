import { BridgeServer } from 'react-native-http-bridge-refurbished';

const server = new BridgeServer('http_service', true);
let engine: any;
let logs: string[] = [];

let NEXT_REQUEST_ID = 1n;
const MAX_REQUEST_ID = 2n ** 64n - 1n;

function nextRequestId(): string {
  const requestId = NEXT_REQUEST_ID.toString();
  NEXT_REQUEST_ID = (NEXT_REQUEST_ID + 1n) % MAX_REQUEST_ID;
  return requestId;
}

async function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

server.get('/ping', async (_, res) => {
  res.send(200, 'application/text', 'pong');
});

server.post('/connect', async (req, res) => {
  // @ts-expect-error
  const schema: string = req.postData!.schema;

  logs = [];

  engine = __PrismaProxy!.create({
    datamodel: schema,
    logLevel: 'ERROR',
    logQueries: true,
    enableTracing: false,
    env: {},
    ignoreEnvVarErrors: true,
    datasourceOverrides: {},
    logCallback: (msg: string) => {
      logs.push(msg);
    },
  });

  __PrismaProxy!.connect(engine, '{}', nextRequestId());

  res.send(200, 'application/json', '{}');
});

server.post('/query', async (req, res) => {
  // @ts-expect-error
  const body: string = req.postData?.body;
  // @ts-expect-error
  const txId: string = req.postData?.txId;
  const queryRes = await __PrismaProxy!.execute(
    engine,
    body,
    '',
    txId,
    nextRequestId()
  );
  // sleep for a bit to allow for logs to be collected
  await sleep(1);
  res.send(
    200,
    'application/json',
    JSON.stringify({ engineResponse: queryRes, logs })
  );
});

server.post('/start_transaction', async (req, res) => {
  // @ts-expect-error
  const body: string = req.postData?.body;
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  const queryRes = __PrismaProxy!.startTransaction(
    engine,
    body,
    trace,
    nextRequestId()
  );
  res.send(200, 'application/text', JSON.stringify(queryRes));
});

server.post('/commit_transaction', async (req, res) => {
  // @ts-expect-error
  const txId: string = req.postData?.txId;
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  const queryRes = __PrismaProxy!.commitTransaction(
    engine,
    txId,
    trace,
    nextRequestId()
  );
  res.send(200, 'application/text', JSON.stringify(queryRes));
});

server.post('/rollback_transaction', async (req, res) => {
  // @ts-expect-error
  const txId: string = req.postData?.txId;
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  const queryRes = __PrismaProxy!.rollbackTransaction(
    engine,
    txId,
    trace,
    nextRequestId()
  );
  res.send(200, 'application/text', JSON.stringify(queryRes));
});

server.post('/disconnect', async (req, res) => {
  if (engine == null) {
    res.send(200, 'application/text', '');
    return;
  }
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  __PrismaProxy!.disconnect(engine, trace, nextRequestId());
  engine = null;
  res.send(200, 'application/text', '');
});

server.listen(3000);
