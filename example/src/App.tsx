import '@op-engineering/react-native-prisma';
import React, { useEffect, useState } from 'react';
import {
  Clipboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NetworkInfo } from 'react-native-network-info';
import { atob, btoa } from 'react-native-quick-base64';

import 'react-native-url-polyfill/auto';
import '../global.css';
import { Button } from './Button';
import './server';
import {
  hooksPrisma,
  createRandomUser,
  deleteUsers,
  createRandomUserGeneric,
} from './db';

// global.TextEncoder = require('text-encoding').TextEncoder;
global.atob = atob;
global.btoa = btoa;

export default function App() {
  const [prismaTime, setPrismaTime] = useState(0);
  const [IP, setIP] = useState<string>('');

  useEffect(() => {
    NetworkInfo.getIPAddress().then((ip) => {
      setIP(`${ip}:3000`);
    });
  }, []);

  const createUser = async () => {
    const start = performance.now();

    await createRandomUser();

    const end = performance.now();
    setPrismaTime(end - start);
  };

  const users = hooksPrisma.user.useFindMany();

  const copyIP = () => {
    Clipboard.setString(IP);
    console.warn('IP copied to clipboard');
  };

  return (
    <SafeAreaView className="flex-1 bg-prisma">
      <ScrollView contentContainerClassName="p-4 gap-4">
        <Text className="text-white font-semibold text-lg">▲ Prisma</Text>
        <TouchableOpacity onPress={copyIP}>
          <View className="justify-between flex-row bg-[#58A6FF55] p-4 border border-[#58A6FF] rounded-lg">
            <Text className="text-white">HTTP Server IP:</Text>
            <Text className="text-white font-semibold">{IP}</Text>
          </View>
        </TouchableOpacity>
        <View className="flex-row justify-between">
          <Text className="text-white font-semibold text-lg">
            Engine Response
          </Text>
          <Text className="text-white">{prismaTime.toFixed(0)}ms</Text>
        </View>
        <Text className="text-white bg-neutral-800 border rounded-lg p-4 border-neutral-700">
          {JSON.stringify(users, null, 4)}
        </Text>
      </ScrollView>
      <Button title="Create user" callback={createUser} />
      <Button title="Delete users" callback={deleteUsers} />
      <Button title="create generic user" callback={createRandomUserGeneric} />
    </SafeAreaView>
  );
}
