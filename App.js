import React, { useEffect, useState } from 'react';
import { delay } from "./functions/delay"
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import AppIntro from "./components/Shared/AppIntro"

function App() {

  const [hide, setHide] = useState(false)
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : "white",
  };
  const hideScreen = async() => {
    await delay(2000)
    SplashScreen.hide();
  }
  useEffect(() => {
    hideScreen()
  }, []);

  return (
  <SafeAreaView style={[styles.container, backgroundStyle]}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    {!hide && <AppIntro setHide={setHide} />}
    {hide && <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:20}}>Login Screen</Text></View>}

  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;