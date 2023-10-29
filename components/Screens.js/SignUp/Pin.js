import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef, useState, useEffect } from 'react';
import urls from "../../../urls.json";
import axios from 'axios';
import ModalView from '../../Shared/ModalView';
import { delay } from '../../../functions/delay';

const Pin = ({setForm, SignUpComplete}) => {

  const in1 = useRef();
  const in2 = useRef();
  const in3 = useRef();
  const in4 = useRef();
  const in5 = useRef();
  const in6 = useRef();
  const [ minutes, setMinutes ] = useState(0);
  const [ seconds, setSeconds ] = useState(45);
  const [ resend, setResend ] = useState(false);
  
  const [modalVisible, setModalVisible] = useState(false);

  const[email, setEmail] = useState("")

  useEffect(()=>{
    let myInterval = setInterval(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(myInterval);
        setResend(true);
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    } 
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });
    
  useEffect(() => {
    getData();
  }, [])
  
  const getData = async () => {
    try {
      const valueA = await AsyncStorage.getItem('formA');
      const valueB = await AsyncStorage.getItem('formB');
      const valueC = await AsyncStorage.getItem('formC');
      const valueD = await AsyncStorage.getItem('formD');

      handleSignUp(
        valueA,
        valueB,
        valueC,
        valueD
      )
    } catch (e) {
      // error reading value
    }
  };

  const handleSignUp = async(a,b,c,d) => {
    let clientData = await {...JSON.parse(a)};
    setEmail(clientData.email)
    axios.post(`${urls.local_url}/clients/create`,{
      client:{...JSON.parse(a), ...JSON.parse(b)},
      disease:{...JSON.parse(d)},
      relatives:{...JSON.parse(c)}
    }).then((x)=>{
      if(x.data.status=="email already exists!"){
        createTwoButtonAlert()
      }
    })
  };

  const handleSumit = async() => {
    let code = await ''+
    in1.current.value +
    in2.current.value +
    in3.current.value +
    in4.current.value +
    in5.current.value +
    in6.current.value;
    axios.get(`${urls.local_url}/auth/clientLogin`,{
      headers:{
        'email':email, 
        'password':code
      }
    }).then(async(x)=>{
      if(x.data.status=="success"){
        setModalVisible(true);
        await AsyncStorage.setItem("login", JSON.stringify(x.data));
        await delay(2000);
        SignUpComplete()
        setModalVisible(false);
      }
    })
  }

  const makeCode = (a, current, value) => {
    (a!=null && value!="")?a.current.focus():null;
    current.current.value = value;
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Error', 'Email Already Exists', [
      {text: 'OK', onPress: () => setForm("A")},
    ]
  );

  return (
  <View style={styles.container}>
    {modalVisible && 
    <View style={styles.modalBack}>
      <ModalView 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        status={'success'} 
        message={'Successfully Verified!'} 
      /> 
    </View>
    }
    <Text style={{fontSize:30, color:'black', marginTop:'5%'}}>Enter Your Pin</Text>
    <Text style={{fontSize:15, color:'grey'}}>Enter your pin to continue</Text>
    
    <View style={{paddingTop:"25%"}}>
    <Text style={{color:'black', fontSize:15}}>Code<Text style={{color:'red'}}> *</Text></Text>
    <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:10}}>
      <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.box} ref={in1} onChangeText={(e)=>makeCode(in2,in1, e)} autoFocus={true} />
      <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.box} ref={in2} onChangeText={(e)=>makeCode(in3,in2, e)} />
      <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.box} ref={in3} onChangeText={(e)=>makeCode(in4,in3, e)} />
      <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.box} ref={in4} onChangeText={(e)=>makeCode(in5,in4, e)} />
      <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.box} ref={in5} onChangeText={(e)=>makeCode(in6,in5, e)} />
      <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.box} ref={in6} onChangeText={(e)=>makeCode(null,in6, e)} />
    </View>
    {/* <View style={{alignItems:'flex-end', marginTop:10}}><Text></Text></View> */}
    </View>

    <View style={{alignItems:'center', marginTop:"20%"}}>
      <Text style={{color:'#D86321', fontSize:20}}>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text>
    </View>

    <View>
      <TouchableOpacity style={styles.buttonBase} onPress={handleSumit}>
        <Text style={{color:'white'}}>Submit</Text>
      </TouchableOpacity>
    </View>

    {resend && <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{setForm("D")}}>
        <Text style={styles.linkBtn}>Back and Check Details</Text>
      </TouchableOpacity>
    </View>}
    
  </View>
  )
}

export default React.memo(Pin)

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  box:{
    borderWidth:1,
    borderColor:'#499ACF',
    width:'14%',
    borderRadius:5,
    textAlign:'center',
    color:'black',
    fontSize:20
  },
  buttonBase: {
    marginTop:20,
    width: "100%",
    height: 40,
    backgroundColor: '#D86321',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkBtn:{
    color:'grey', 
    marginTop:20, 
    fontSize:15, 
    fontWeight:'500', 
    borderBottomWidth:1, 
    borderBottomColor:'grey'
  },
  modalBack:{
    position:'absolute', height:"150%", width:"150%",
    backgroundColor:'#373737', opacity:0.7, zIndex:1
  }
})