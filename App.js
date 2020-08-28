import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';

const App = () => {
  // hooks
  const sheetRef = useRef(null);
  const secondSheetRef = useRef(null);

  // variables
  const data = useMemo(
    () =>
      Array(20)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);
  const snapPoints2 = useMemo(() => ['25%', '50%', '90%'], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapTo(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleBtnPress = useCallback(() => {
    console.log('button pressed');
  });

  // render
  const renderItem = useCallback(({item}) => {
    console.log('renderItem -> item', item);
    if (item === 'index-3') {
      return (
        <BottomSheetScrollView horizontal>
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
          <View style={styles.roundBtn} />
        </BottomSheetScrollView>
      );
    }
    return (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleBtnPress}>
          <Text>Tap on me</Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        initialSnapIndex={2}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <BottomSheetFlatList
          data={data}
          keyExtractor={(i) => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
      <BottomSheet
        ref={secondSheetRef}
        initialSnapIndex={1}
        snapPoints={snapPoints2}
        onChange={handleSheetChange}>
        <BottomSheetFlatList
          style={{backgroundColor: 'black'}}
          contentContainerStyle={{backgroundColor: 'black'}}
          data={data}
          keyExtractor={(i) => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    margin: 8,
    backgroundColor: 'lightblue',
    borderRadius: 12,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    paddingHorizontal: 24,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
  },
  roundBtn: {
    margin: 4,
    width: 64,
    height: 64,
    backgroundColor: '#eee',
    borderRadius: 32,
  },
});

export default App;
