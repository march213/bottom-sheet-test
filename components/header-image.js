import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  image: {
    width: 208,
    height: 272,
  },
});

const HeaderImage = ({toggleBottomSheet}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toggleBottomSheet(true)}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://storage.googleapis.com/z1-rumble.appspot.com/assets/Games/marsdashunity/poster.png?cachebust=1',
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default HeaderImage;
