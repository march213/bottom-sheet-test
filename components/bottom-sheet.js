import React, {useCallback, useRef, useMemo, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Modalize} from 'react-native-modalize';

const GameBottomSheet = () => {
  const modalizeRef = useRef(null);

  const getData = () => ['1', '2'];

  useEffect(() => {
    modalizeRef.current?.open();
    return () => {};
  }, []);

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={300}
      flatListProps={{
        data: getData(),
        renderItem: renderItem,
        keyExtractor: (item) => item.heading,
        showsVerticalScrollIndicator: false,
      }}
    />
  );
};

const styles = StyleSheet.create({
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

export default GameBottomSheet;
