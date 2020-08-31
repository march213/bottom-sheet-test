import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HeaderImage from './components/header-image';
import GameBottomSheet from './components/game-bottom-sheet';
import LeaderBottomSheet from './components/leaderboard-bottom-sheet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
  },
});

const App = () => {
  const [shouldShow, toggleBottomSheet] = useState(false);
  const [shouldShowLeaderBoardSheet, toggleLeaderBoardSheet] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderImage
        toggleBottomSheet={(payload) => toggleBottomSheet(payload)}
      />
      <GameBottomSheet
        shouldShow={shouldShow}
        toggleBottomSheet={toggleBottomSheet}
        toggleLeaderBoardSheet={toggleLeaderBoardSheet}
      />
      <LeaderBottomSheet
        shouldShowLeaderBoardSheet={shouldShowLeaderBoardSheet}
        toggleLeaderBoardSheet={toggleLeaderBoardSheet}
      />
    </SafeAreaView>
  );
};

export default App;
