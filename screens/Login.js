import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LoginComponent from '../components/Screens.js/Login/LoginComponent';

const Login = ({ navigation }) => {

  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/LoginImg.png')} style={styles.img} />
    <View style={{padding:20, flex:2}}>
      <LoginComponent navigation={navigation} />
    </View>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:3,
    backgroundColor:'#FFFFFF'
  },
  img: {
    flex: 3,
    resizeMode:'cover',
  }
})