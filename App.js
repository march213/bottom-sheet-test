import React, {useState} from 'react';
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
  const [shouldShow, toggleBottomSheet] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderImage
        toggleBottomSheet={(payload) => toggleBottomSheet(payload)}
      />
      <GameBottomSheet
        shouldShow={shouldShow}
        toggleBottomSheet={toggleBottomSheet}
      />
    </SafeAreaView>
  );
};

export default App;
