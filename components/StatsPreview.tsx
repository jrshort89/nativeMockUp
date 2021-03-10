import React from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function StatsPreview() {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        source={{
          uri:
            'https://www.psychiatryadvisor.com/wp-content/uploads/sites/8/2018/12/neuron_833578.jpg',
        }}>
        <View style={styles.opacity}>
          <View style={styles.card}>
            <Text style={styles.fontColor}>Stats Preview</Text>
            <View style={styles.littleLines}>
              <View style={{...styles.tinyText, ...styles.fontColor}}>
                <Text style={styles.tinyFont}>dummy</Text>
                <Text style={styles.tinyFont}>dummy</Text>
              </View>
              <Icon name="circle-thin" size={30} color="white" />
            </View>
          </View>
          <View style={styles.line}>
            <Text>{'\n'}</Text>
          </View>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <View style={styles.buttonText}>
            <Text style={styles.fontColor}>NEXT UP</Text>
            <View style={styles.session}>
              <Text style={styles.fontColor}>Session 1 &nbsp;&nbsp;</Text>
              <Icon name="clock-o" size={16} color="white" />
              <Text style={styles.fontColor}> 5 minutes</Text>
            </View>
            <Text>{'\n'}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Icon name="play-circle" size={16} color="white" />
                <Text style={styles.fontColor}>&nbsp;&nbsp;Take now</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Icon name="calendar" size={16} color="white" />
                <Text style={styles.fontColor}>
                  &nbsp;&nbsp;Schedule for later
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  littleLines: {
    color: 'red',
    flexDirection: 'row',
  },
  tinyFont: {
    fontSize: 10,
    color: 'white',
    fontWeight: '900',
  },
  tinyText: {
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth: 1,
    width: '90%',
    borderBottomColor: 'white',
  },
  buttonText: {
    width: '90%',
    alignContent: 'flex-start',
  },
  session: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageBackground: {
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  opacity: {
    alignItems: 'center',
    width: '100%',
  },
  imageStyle: {
    opacity: 0.65,
  },
  fontColor: {
    color: 'white',
    fontWeight: '900',
  },
  button: {
    color: 'white',
    backgroundColor: '#a75dc9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
});
