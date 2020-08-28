import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
  },
  image: {
    width: 208,
    height: 272,
  },
});

const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://storage.googleapis.com/z1-rumble.appspot.com/assets/Games/marsdashunity/poster.png?cachebust=1',
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default HeaderImage;
