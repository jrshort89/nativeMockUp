import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageCarousel from './ImageCarousel';
import StatsPreview from './StatsPreview';
import Suggestions from './Suggestions';

export default function Demo() {
  return (
    <View style={styles.screen}>
      <StatsPreview />
      <Suggestions />
      <ImageCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0e6f2',
  },
});
