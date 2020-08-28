import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HeaderImage from './components/header-image';
import GameBottomSheet from './components/bottom-sheet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderImage />
      <GameBottomSheet />
    </SafeAreaView>
  );
};

export default App;
