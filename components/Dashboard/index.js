import { StyleSheet, Text, View, StatusBar, BackHandler, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import DoctorsProfile from './DoctorsProfile';
import SearchBar from './SearchBar';
import Slider from './Slider';
import Menu from './Menu';
import SearchScreen from './SearchScreen';
import axios from 'axios';
import urls from "../../urls.json";

const Dashboard = ({navigation}) => {

  const [search, serSearch] = useState(false);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`${urls.local_url}/doctor/getTopDoctors`)
    .then((x)=>{
      setDoctors(x.data.result);
    })
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        serSearch(false)
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
  <>
    {!search && 
    <>
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
        <SearchBar serSearch={serSearch} />
        <View style={{padding:15}}>
          <Text style={[styles.dashText, { marginBottom:20 }]}>Appointment Today</Text>
          <Slider/>
          <Text style={[styles.dashText, { marginTop:20, marginBottom:20 }]}>Doctor Speciality</Text>
          <Menu/>
          <Text style={[styles.dashText, { marginTop:20, marginBottom:20 }]}>Top Doctors Today</Text>
          <DoctorsProfile doctors={doctors} search={false} term={""} />
        </View>
      </ScrollView>
    </>
    }
    {search && <SearchScreen serSearch={serSearch} /> }
  </>
  )
}

export default React.memo(Dashboard)

const styles = StyleSheet.create({
  dashText:{
    color:'#303030',
    fontSize:15,
    fontWeight:"600"
  }
});