/** 
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import styled, { css } from '@emotion/native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const LogoStyle = styled.Image`
  position: absolute;
  width: 210px;
  height: 210px;
  left: 82px;
  top: 121px;
  border-radius: 105px;
`
const TextStyle = styled.Text`
  position: absolute;
  width: 275px;
  height: 47px;
  left: 50px;
  top: 417px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  color: #000000;
`
const RocketStyle = styled.Text`
  position: absolute;
  left: 147px;
  top: 551px;
  font-weight: 500;
  font-size: 80px;
  line-height: 94px;
`

const App: () => React$Node = () => {
  return (<View>
    <LogoStyle source={require('./jingu-logo-512.png')} />
    <TextStyle>Anton Lobanov</TextStyle>
    <RocketStyle>🚀</RocketStyle>
  </View>
  );
};

export default App;
