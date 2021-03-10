import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View style={styles.screen}>
      <Icon name="bluetooth" size={30} />
      <Text>The Company Name</Text>
      <Icon name="bell" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#decae3',
  },
});
