import { StyleSheet, Text, View, Alert, BackHandler } from 'react-native'
import React from 'react';
import SearchBar from './SearchBar';
import Slider from './Slider';
import Menu from './Menu';
import { useFocusEffect } from '@react-navigation/native';

const Dashboard = ({navigation}) => {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
  <View>
    <SearchBar/>
    <View style={{padding:15}}>
      <Text style={[styles.dashText, { marginBottom:20 }]}>Appointment Today</Text>
      <Slider/>
      <Text style={[styles.dashText, { marginTop:20, marginBottom:20 }]}>Doctor Speciality</Text>
      <Menu/>
      <Text style={[styles.dashText, { marginTop:20, marginBottom:20 }]}>Top Heart Speciality</Text>
    </View>
  </View>
  )
}
export default Dashboard

const styles = StyleSheet.create({
  dashText:{
    color:'#303030',
    fontSize:15
  }
})