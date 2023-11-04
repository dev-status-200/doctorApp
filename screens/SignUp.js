import { View, StyleSheet } from "react-native";
import React, { useState } from 'react';
import SignUpCompA from "../components/Screens.js/SignUp/SignUpCompA";
import SignUpCompB from "../components/Screens.js/SignUp/SignUpCompB";
import SignUpCompC from "../components/Screens.js/SignUp/SignUpCompC";
import SignUpCompD from "../components/Screens.js/SignUp/SignUpCompD";
import Pin from "../components/Screens.js/SignUp/Pin";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import urls from "../urls.json";

const SignUp = ({navigation}) => {

  const [form, setForm] = useState("A");
  
  const onSubmitA = async(data) => {
    await storeData(data, "formA");
    setForm("B")
  }
  const onSubmitB = async(data) => {
    await storeData(data, "formB");
    setForm("C")
  }
  const onSubmitC = async(data) => {
    await storeData(data, "formC");
    setForm("D")
  }
  const onSubmitD = async(data) => {
    await storeData(data, "formD");
    setForm("Pin")
  }

  const storeData = async (value, key) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      
    }
  };

  const SignUpComplete = async(email) => {
    await axios.get(`https://curly-familiar-scorpion.glitch.me/auth/clientOtpSend`,{
      headers:{email:email}
    })
    navigation.navigate("OtpScreen");
  }

  return (
    <View style={styles.container}>
      {form=="A" && <SignUpCompA navigation={navigation} onSubmit={onSubmitA} />}
      {form=="B" && <SignUpCompB onSubmit={onSubmitB} setForm={setForm} />}
      {form=="C" && <SignUpCompC onSubmit={onSubmitC} setForm={setForm} />}
      {form=="D" && <SignUpCompD onSubmit={onSubmitD} setForm={setForm} />}
      {form=="Pin" && <Pin setForm={setForm} SignUpComplete={SignUpComplete} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
});

export default React.memo(SignUp)