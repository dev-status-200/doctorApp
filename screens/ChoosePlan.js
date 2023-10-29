import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import React from 'react';
import ChoosePlan from '../components/Screens.js/ChoosePlan';

const ChoosePlanScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/blackDoctor.png')} resizeMode="cover" style={styles.image}>
      <ChoosePlan navigation={navigation} />
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
    }
  });

export default ChoosePlanScreen