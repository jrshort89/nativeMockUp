import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ImageCarousel() {
  let _renderItem = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <View style={styles.lock}>
          <Icon name="lock" size={30} color="white" />
        </View>
        <Image source={{uri: item.title}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Carousel
        // ref={(c) => {
        //   this._carousel = c;
        // }}
        data={[
          {
            title:
              'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmtvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          },
          {
            title:
              'https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/011/922/original/PWR_at_Home_Workout_ena86967915ab4c3c11809ad2c17d9bd2c.jpg?1554678228',
          },
          {
            title:
              'https://d50b62f6164e0c4a0279-11570554cb5edae3285603e6ab25c978.ssl.cf5.rackcdn.com/html_body_blocks/images/000/011/922/original/PWR_at_Home_Workout_ena86967915ab4c3c11809ad2c17d9bd2c.jpg?1554678228',
          },
        ]}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width * 0.9}
        itemWidth={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: Dimensions.get('window').width * 0.5,
    borderWidth: 10,
    borderColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    zIndex: 1,
  },
  lock: {
    zIndex: 10,
    position: 'absolute',
    marginTop: 20,
    alignItems: 'flex-start',
    width: '80%',
  },
});
