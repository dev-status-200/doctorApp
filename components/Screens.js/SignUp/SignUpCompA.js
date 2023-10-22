import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import AntdIcons from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useForm, useController } from "react-hook-form";
import RNInput from "../../Shared/Form/TextInput";
import RNSelect from "../../Shared/Form/Select";
import RNCheckBox from "../../Shared/Form/CheckBox";

const Header = (props) => {
    return(
    <View>
        <View style={{flexDirection:'row', padding:15, justifyContent:'space-between'}}>
            <View style={{width:"25%"}}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
                    <AntdIcons name="leftcircle" color={"#D86321"} size={30} />
                </TouchableOpacity>
            </View>
            <View style={{width:"50%", padding:2}}>
                <Text style={{textAlign:'center', fontSize:22, color:'black', fontWeight:'500'}}>{props.name}</Text>
            </View>
            <View style={{width:"25%"}}></View>
        </View>
        <View style={{backgroundColor:'silver', height:1, marginLeft:15, marginRight:15}}></View>
    </View>
    )
}

const SignUpCompA = ({navigation}) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            agree: true,
        }
    });
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <View style={styles.container}>
        <Header name={"Sign Up"} navigation={navigation} />
        <View style={{paddingLeft:20, paddingRight:20, paddingTop:10}}>
            <View style={styles.row}>
                <View style={styles.md}>
                    <RNInput control={control} name="firstName" placeholder={"First Name"} label={"Name"} required={true} />
                </View>
                <View style={styles.md}>
                    <RNInput control={control} name="lastName" placeholder={"Last Name"} label={" "} />
                </View>
            </View>
            {errors.firstName && <Text>This is required.</Text>}
            <View style={[styles.row, styles.mt2]}>
                <View style={styles.xl}>
                    <RNInput control={control} name="email" placeholder={"Enter your email"} label={"E-mail"} />
                </View>
            </View>
            <View style={[styles.row, styles.mt2]}>
                <View style={styles.xl}>
                    <RNInput control={control} name="phone" placeholder={"Enter your phone number"} label={"Phone Number"} />
                </View>
            </View>
            <View style={[styles.row, styles.mt2, { position:'relative', zIndex:2 }]}>
                <View style={styles.xl}>
                    <RNSelect control={control} name="gender" placeholder={"Select your Gender"} label={"Gender"}
                        list={[
                            {label:'Male', value:'Male'},
                            {label:'Female', value:'Female'},
                        ]}
                    />
                </View>
            </View>
            <View style={[styles.row, styles.mt2, { position:'relative', zIndex:1 }]}>
                <View style={styles.sm}>
                    <RNSelect control={control} name="day" placeholder={"Day"} label={"Date of Birth"}
                        list={[
                            {label:'1', value:'1'},
                            {label:'2', value:'2'},
                            {label:'3', value:'3'},
                        ]}
                    />
                </View>
                <View style={styles.sm}>
                    <RNSelect control={control} name="month" placeholder={"Month"} label={" "} 
                        list={[
                            {label:'01', value:'01'},
                            {label:'02', value:'02'},
                            {label:'03', value:'03'},
                        ]}
                    />
                </View>
                <View style={styles.sm}>
                    <RNSelect control={control} name="year" placeholder={"Year"} label={" "} 
                        list={[
                            {label:'2005', value:'2005'},
                            {label:'2004', value:'2004'},
                            {label:'2003', value:'2003'},
                            {label:'2002', value:'2002'},
                            {label:'2001', value:'2001'},
                        ]}
                    />
                </View>
            </View>
            <View style={[styles.row, styles.mt2]}>
                <View style={styles.md}>
                    <RNInput control={control} name="height" placeholder={"in inches"} label={"Height"} />
                </View>
                <View style={styles.md}>
                    <RNInput control={control} name="weight" placeholder={"In KGs"} label={"Weight"} />
                </View>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:20}}>
                <RNCheckBox control={control} name="agree" required={true} />
                <Text style={{color:'grey'}}>
                    By creating your account you have to agree with our 
                    <Text style={{fontWeight:'600', color:'black'}}> Teams and Conditions</Text>
                </Text>
            </View>
            {errors.agree && <Text>This is required.</Text>}
            <TouchableOpacity style={styles.buttonBase} onPress={handleSubmit(onSubmit)}>
                <Text style={{color:'white'}}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor:"white"
    },
    label:{
        color:'black',
        fontSize:17
    },
    input:{
        borderColor:'silver', borderWidth:1, borderRadius:12, padding:13, paddingLeft:17, marginTop:5
    },
    buttonBase: {
        marginTop:20,
        width: "100%",
        height: 40,
        backgroundColor: '#D86321',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row:{flexDirection:'row', width:"100%", justifyContent:'space-between'},
    sm:{width:'30%'},
    md:{width:'49%'},
    xl:{width:'100%'},
    mt2:{marginTop:12},
    mb2:{marginBottom:20},
});

export default SignUpCompA;