import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SectionList } from 'react-native';
import AntdIcons from 'react-native-vector-icons/AntDesign';
import { useForm } from "react-hook-form";
import RNInput from "../../Shared/Form/TextInput";
import RNSelect from "../../Shared/Form/Select";
import ErrorA from '../../Shared/ErrorA';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = (props) => {
    return(
    <View>
        <View style={{flexDirection:'row', padding:15, justifyContent:'space-between'}}>
            <View style={{width:"15%", paddingTop:5}}>
                <TouchableOpacity onPress={()=> {props.setForm("B")}}>
                    <AntdIcons name="leftcircle" color={"#D86321"} size={20} />
                </TouchableOpacity>
            </View>
            <View style={{width:"70%", padding:2}}>
                <Text style={{textAlign:'center', fontSize:22, color:'black', fontWeight:'500'}}>{props.name}</Text>
            </View>
            <View style={{width:"15%"}}></View>
        </View>
        <View style={{backgroundColor:'silver', height:1, marginLeft:15, marginRight:15}}></View>
    </View>
    )
}

const SignUpCompD = ({setForm, onSubmit}) => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            
        }
    });
    const [list, setList] = useState([
        {data: ['Pizza']}
    ]);

    useEffect(() => {
        getData()
    }, [])
    
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('formC');
          if (value !== null) {
            reset(JSON.parse(value))
          }
        } catch (e) {
          console.log(e)
        }
    };

  return (
    <View style={styles.container}>
    <Header name={"Add Your Family Details"} setForm={setForm} />
    <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
        <View style={{paddingLeft:22, paddingRight:22, paddingTop:10, paddingBottom:20}}>
            <Text style={{color:'black', fontSize:20, marginBottom:10}}>Spouse Information</Text>
            <View style={styles.row}>
                <View style={styles.md}>
                    <RNInput control={control} name="firstName" placeholder={"First Name"} label={"Name"} required={true} />
                </View>
                <View style={styles.md}>
                    <RNInput control={control} name="lastName" placeholder={"Last Name"} label={" "} required={true} />
                </View>
            </View>
            {(errors.firstName || errors.lastName) && <ErrorA txt={"Full Name is Required"} />}

            <View style={[styles.row, styles.mt2, { position:'relative', zIndex:2 }]}>
                <View style={styles.sm}>
                    <RNSelect control={control} name="day" placeholder={"Day"} label={"Date of Birth"} required={true}
                        list={[
                            {label:'1', value:'1'},
                            {label:'2', value:'2'},
                            {label:'3', value:'3'},
                        ]}
                    />
                </View>
                <View style={styles.sm}>
                    <RNSelect control={control} name="month" placeholder={"Month"} label={" "} required={true}
                        list={[
                            {label:'01', value:'01'},
                            {label:'02', value:'02'},
                            {label:'03', value:'03'},
                        ]}
                    />
                </View>
                <View style={styles.sm}>
                    <RNSelect control={control} name="year" placeholder={"Year"} label={" "} required={true}
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
            {(errors.day||errors.month||errors.year) && <ErrorA txt={"Date of Birth is required"} />}

            <View style={[styles.row, styles.mt2, { position:'relative', zIndex:1 }]}>
                <View style={styles.xl}>
                    <RNSelect control={control} name="disease" placeholder={"Select Here"} label={"Disease"} required={true}
                        list={[
                            {label:'Fever', value:'Fever'},
                            {label:'Cough', value:'Cough'},
                            {label:'Diabetes', value:'Diabetes'},
                        ]}
                    />
                </View>
            </View>
            {errors.disease && <ErrorA txt={"Gender is Required"} />}
            <View style={{backgroundColor:'silver', height:1, marginLeft:5, marginRight:5, marginTop:20, marginBottom:20}}></View>
            <Text style={{color:'black', fontSize:20, marginBottom:10}}>Child Information</Text>
            <View style={styles.row}>
                <View style={styles.md}>
                    <RNInput control={control} name="cfirstName" placeholder={"First Name"} label={"Name"} required={true} />
                </View>
                <View style={styles.md}>
                    <RNInput control={control} name="clastName" placeholder={"Last Name"} label={" "} required={true} />
                </View>
            </View>
            {(errors.cfirstName || errors.clastName) && <ErrorA txt={"Full Name is Required"} />}

            <View style={[styles.row, styles.mt2, { position:'relative', zIndex:2 }]}>
                <View style={styles.sm}>
                    <RNSelect control={control} name="cday" placeholder={"Day"} label={"Date of Birth"} required={true}
                        list={[
                            {label:'1', value:'1'},
                            {label:'2', value:'2'},
                            {label:'3', value:'3'},
                        ]}
                    />
                </View>
                <View style={styles.sm}>
                    <RNSelect control={control} name="cmonth" placeholder={"Month"} label={" "} required={true}
                        list={[
                            {label:'01', value:'01'},
                            {label:'02', value:'02'},
                            {label:'03', value:'03'},
                        ]}
                    />
                </View>
                <View style={styles.sm}>
                    <RNSelect control={control} name="cyear" placeholder={"Year"} label={" "} required={true}
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
            {(errors.cday||errors.cmonth||errors.cyear) && <ErrorA txt={"Date of Birth is required"} />}

            <View style={[styles.row, styles.mt2, { position:'relative', zIndex:1 }]}>
                <View style={styles.xl}>
                    <RNSelect control={control} name="cdisease" placeholder={"Select Here"} label={"Disease"} required={true}
                        list={[
                            {label:'Fever', value:'Fever'},
                            {label:'Cough', value:'Cough'},
                            {label:'Diabetes', value:'Diabetes'},
                        ]}
                    />
                </View>
            </View>
            {errors.disease && <ErrorA txt={"Gender is Required"} />}
            
            <TouchableOpacity style={styles.linkBtn}>
                <Text style={styles.linkBtn}>+ Add Another</Text>
            </TouchableOpacity>

            <View style={{marginTop:5}}>
            <TouchableOpacity style={styles.buttonBase} onPress={handleSubmit(onSubmit)}>
                <Text style={{color:'white'}}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
        )}
    />
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
    linkBtn:{color:'#D86321', marginTop:20, fontSize:15, fontWeight:'500', borderBottomWidth:1, borderBottomColor:'#D86321', width:90},
    row:{flexDirection:'row', width:"100%", justifyContent:'space-between'},
    sm:{width:'30%'},
    md:{width:'49%'},
    xl:{width:'100%'},
    mt2:{marginTop:20},
    mb2:{marginBottom:20}
});

export default React.memo(SignUpCompD);