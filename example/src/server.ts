import { BridgeServer } from 'react-native-http-bridge-refurbished';

const server = new BridgeServer('http_service', true);
let engine: any;
let logs: string[] = [];

async function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

server.get('/ping', async (_, res) => {
  res.send(200, 'application/text', 'pong');
});

server.post('/connect', async (req, res) => {
  // @ts-ignore
  const schema: string = req.postData?.schema;
  // // @ts-ignore
  // const logLevel =  req.postData?.logLevel;

  logs = [];

  engine = __PrismaProxy!.create({
    datamodel: schema,
    logLevel: 'ERROR',
    logQueries: true,
    env: {},
    ignoreEnvVarErrors: true,
    datasourceOverrides: {},
    logCallback: (msg: string) => {
      logs.push(msg);
    },
  });

  __PrismaProxy!.connect(engine, '{}');

  res.send(200, 'application/json', '{}');
});

server.post('/query', async (req, res) => {
  // @ts-expect-error
  const body: string = req.postData?.body;
  // @ts-expect-error
  const txId: string = req.postData?.txId;
  const queryRes = __PrismaProxy!.execute(engine, body, '', txId);
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
  // console.log(typeof body);
  // console.log(body);
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  const queryRes = __PrismaProxy!.startTransaction(engine, body, trace);
  res.send(200, 'application/text', queryRes);
});

server.post('/commit_transaction', async (req, res) => {
  // @ts-expect-error
  const txId: string = req.postData?.txId;
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  const queryRes = __PrismaProxy!.commitTransaction(engine, txId, trace);
  res.send(200, 'application/text', queryRes);
});

server.post('/rollback_transaction', async (req, res) => {
  // @ts-expect-error
  const txId: string = req.postData?.txId;
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  const queryRes = __PrismaProxy!.rollbackTransaction(engine, txId, trace);
  res.send(200, 'application/text', queryRes);
});

server.post('/disconnect', async (req, res) => {
  if (engine == null) {
    res.send(200, 'application/text', '');
    return;
  }
  // @ts-expect-error
  const trace: string = req.postData?.trace;
  __PrismaProxy!.disconnect(engine, trace);
  engine = null;
  res.send(200, 'application/text', '');
});

server.listen(3000);
