import React, { useEffect, useState } from 'react';
import { delay } from "./functions/delay"
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppIntro from "./components/Shared/AppIntro"
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {

  const [hide, setHide] = useState(false);

  return (
    <View style={{flex:1}}>
      { !hide && <AppIntro setHide={setHide} /> }
      { hide && <Login navigation={navigation} /> }
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
  <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default React.memo(App);