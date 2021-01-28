import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../../reuse/Header';
const HomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#4630EB" />
      <View>
        <Header />
        <Text>Home Screen</Text>
      </View>
    </>
  );
};

export default HomeScreen;
