import React, {useRef, useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {FlatList} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');

const LeaderBottomSheet = ({
  toggleLeaderBoardSheet,
  shouldShowLeaderBoardSheet,
}) => {
  const modalizeRef = useRef(null);

  useEffect(() => {
    if (shouldShowLeaderBoardSheet) {
      modalizeRef.current?.open();
    }
    return () => {};
  }, [shouldShowLeaderBoardSheet]);

  return (
    <Modalize
      onClose={() => toggleLeaderBoardSheet(false)}
      withOverlay={false}
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={styles.handle}>
      <View style={styles.container}>
        <View style={styles.tabs} />
        <View style={styles.avatar} />
        <View style={styles.name} />
        <View style={styles.score} />
        <View style={styles.divider} />
        <FlatList
          style={styles.list}
          renderItem={({item}) => <View style={styles.item} key={item} />}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, paddingBottom: 20},
  handle: {backgroundColor: '#EDEEF3'},
  tabs: {
    marginTop: 32,
    height: 44,
    backgroundColor: '#F4F5F9',
    borderRadius: 6,
  },
  avatar: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    marginTop: 20,
    backgroundColor: '#BFC2D5',
    borderRadius: 40,
  },
  name: {
    alignSelf: 'center',
    width: 42,
    height: 15,
    marginTop: 10,
    backgroundColor: '#E8EAF0',
  },
  score: {
    alignSelf: 'center',
    width: 80,
    height: 24,
    marginTop: 6,
    backgroundColor: '#E8EAF0',
  },
  divider: {
    height: 1,
    marginVertical: 20,
    backgroundColor: '#E8EAF0',
  },
  item: {
    height: 48,
    backgroundColor: '#E8EAF0',
  },
  itemSeparator: {
    height: 16,
  },
});

export default LeaderBottomSheet;
