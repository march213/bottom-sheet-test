import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {FlatList} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');

const GameBottomSheet = ({
  toggleBottomSheet,
  toggleLeaderBoardSheet,
  shouldShow,
}) => {
  const modalizeRef = useRef(null);

  useEffect(() => {
    if (shouldShow) {
      modalizeRef.current?.open();
    }
    return () => {};
  }, [shouldShow]);

  return (
    <Modalize
      onClose={() => toggleBottomSheet(false)}
      withOverlay={false}
      ref={modalizeRef}
      snapPoint={height - 360}
      handlePosition="inside"
      handleStyle={styles.handle}>
      <View style={styles.container}>
        <View style={styles.title} />
        <View style={styles.subtitle} />
        <View style={styles.button} />
        <View style={styles.description} />
        <View style={styles.banner} />
        <View style={styles.divider} />
        <View style={styles.sectionTitle} />
        <View style={styles.sectionSubtitle} />
        {/* Dont really know if we need to use FlatList here, instead of the simple map */}
        <FlatList
          style={styles.list}
          renderItem={({item}) => <View style={styles.itemRound} key={item} />}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal
          ItemSeparatorComponent={() => (
            <View style={styles.itemRoundSeparator} />
          )}
        />
        <View style={styles.callToAction1} />
        <View style={styles.callToAction2} />
        <View style={styles.divider} />
        <View style={styles.sectionTitle} />
        {/* Should bring up another modal */}
        <TouchableOpacity
          style={styles.leaderboard}
          onPress={() => toggleLeaderBoardSheet(true)}
        />
        <View style={styles.divider} />
        <View style={styles.sectionTitle} />
        {/* Dont really know if we need to use FlatList here, instead of the simple map */}
        <FlatList
          style={styles.list}
          renderItem={({item}) => <View style={styles.itemRect} key={item} />}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal
          ItemSeparatorComponent={() => (
            <View style={styles.itemRectSeparator} />
          )}
        />
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, paddingBottom: 20},
  handle: {backgroundColor: '#EDEEF3'},
  title: {
    width: 118,
    height: 26,
    marginTop: 24,
    backgroundColor: '#EDEEF3',
  },
  subtitle: {
    width: 195,
    height: 22,
    marginTop: 6,
    backgroundColor: '#EDEEF3',
  },
  button: {
    height: 46,
    marginTop: 12,
    backgroundColor: '#6B46FF',
    borderRadius: 40,
  },
  description: {
    height: 32,
    marginTop: 16,
    backgroundColor: '#EDEEF3',
  },
  banner: {
    height: 72,
    marginTop: 16,
    backgroundColor: '#F9D589',
    borderRadius: 10,
  },
  divider: {
    height: 1,
    marginVertical: 20,
    backgroundColor: '#E8EAF0',
  },
  sectionTitle: {
    width: 145,
    height: 15,
    backgroundColor: '#E8EAF0',
  },
  sectionSubtitle: {
    width: 178,
    height: 14,
    marginTop: 6,
    backgroundColor: '#E8EAF0',
  },
  list: {marginTop: 16, marginBottom: 16},
  itemRound: {
    width: 62,
    height: 62,
    backgroundColor: '#E8EAF0',
    borderRadius: 31,
  },
  itemRoundSeparator: {width: 18},
  callToAction1: {
    height: 50,
    backgroundColor: '#FDF932',
    borderRadius: 8,
  },
  callToAction2: {
    height: 50,
    marginTop: 6,
    backgroundColor: '#BFC2D5',
    borderRadius: 8,
  },
  leaderboard: {
    height: 78,
    marginTop: 12,
    borderColor: '#DFE0E8',
    borderWidth: 1,
    borderRadius: 10,
  },
  itemRect: {
    width: 123,
    height: 161,
    backgroundColor: '#E8EAF0',
    borderRadius: 12,
  },
  itemRectSeparator: {width: 14},
});

export default GameBottomSheet;
