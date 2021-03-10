import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Suggestions() {
  return (
    <View>
      <View style={styles.screen}>
        <View style={styles.top}>
          <Text style={styles.guided}>Guided Programs</Text>
        </View>
        <View style={styles.text}>
          <Pressable onPress={() => {}}>
            <Text style={styles.view}>View all</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.lock}>
            <Icon name="lock" size={30} color="#a75dc9" />
          </View>
          <View style={styles.lockText}>
            <Text>Finish your stress profile to unlock more content.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  guided: {
    fontWeight: '900',
    fontSize: 17,
  },
  top: {
    justifyContent: 'flex-end',
  },
  view: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'white',
    padding: 7,
    margin: 20,
  },
  lockText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  boxContainer: {
    width: '100%',
    alignItems: 'center',
  },
  lock: {
    alignItems: 'flex-start',
    width: '12%',
  },
  text: {
    justifyContent: 'flex-end',
  },
});
