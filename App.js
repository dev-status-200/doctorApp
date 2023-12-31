import React, { useEffect, useState } from 'react';
import { delay } from "./functions/delay"
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppIntro from "./components/Shared/AppIntro"
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ChoosePlan from './screens/ChoosePlan';
import ChangeImage from './screens/ChangeImage';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OtpScreen from './screens/OtpScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {

  const [hide, setHide] = useState(false);

  useEffect(() => {
    getScreen();
  }, [])
  async function getScreen(){
    const value = await AsyncStorage.getItem("firstBoot");
    value?setHide(true):null;
  }
  
  return (
  <View style={{flex:1}}>
    { hide && <Login navigation={navigation} /> }
    { !hide && <AppIntro setHide={setHide} /> }
  </View>
  );
}

function App() {

  const hideScreen = async() => {
    await delay(2000)
    SplashScreen.hide();
  }

  useEffect(() => { hideScreen() }, []);

  return (
  <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ChangeImage" component={ChangeImage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ChoosePlan" component={ChoosePlan} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </GestureHandlerRootView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'FontsFree-Net-ProximaNova-Regular'
  },
});
export default React.memo(App);