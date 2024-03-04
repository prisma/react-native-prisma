import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const Button = (props: { title: string; callback: any }) => {
  return (
    <TouchableOpacity
      className="flex-row bg-[#58A6FF55] p-3 border border-[#58A6FF] rounded-lg my-1 mx-2 justify-center"
      onPress={props.callback}
    >
      <Text className="text-white">{props.title}</Text>
    </TouchableOpacity>
  );
};
