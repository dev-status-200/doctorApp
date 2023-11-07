import { View } from 'react-native'
import React from 'react';
import ProfileScreen from '../components/Screens.js/Profile/';

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <ProfileScreen navigation={navigation} />
    </View>
  )
}

export default Profile