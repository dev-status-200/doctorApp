import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SectionList } from 'react-native';
import AntdIcons from 'react-native-vector-icons/AntDesign';
import { useForm } from "react-hook-form";
import RNInput from "../../Shared/Form/TextInput";
import RNSelect from "../../Shared/Form/Select";
import ErrorA from '../../Shared/ErrorA';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNCheckBox from "../../Shared/Form/CheckBox";

const Header = (props) => {
    return(
    <View>
        <View style={{flexDirection:'row', padding:15, justifyContent:'space-between'}}>
            <View style={{width:"15%", paddingTop:5}}>
                <TouchableOpacity onPress={()=> {props.setForm("C")}}>
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
          const value = await AsyncStorage.getItem('formD');
          if (value !== null) {
            reset(JSON.parse(value))
          }
        } catch (e) {
          console.log(e)
        }
    };

  return (
    <View style={styles.container}>
    <Header name={"Just A Little More"} setForm={setForm} />
    <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
        <View style={{paddingLeft:22, paddingRight:22, paddingTop:10, paddingBottom:20}}>
            <Text style={{color:'black', fontSize:15, marginBottom:10}}>Please Check All the boxes which applied to your or in your Family</Text>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="one"  />
                <Text style={{color:'grey', marginTop:3}}>Heart diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="two"  />
                <Text style={{color:'grey', marginTop:3}}>Intellectual disabilities*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="three"  />
                <Text style={{color:'grey', marginTop:3}}>Immunodeficiency diseases&disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="four"  />
                <Text style={{color:'grey', marginTop:3}}>Kidney diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="five"  />
                <Text style={{color:'grey', marginTop:3}}>Lung diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="six"  />
                <Text style={{color:'grey', marginTop:3}}>Mental illness*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="seven"  />
                <Text style={{color:'grey', marginTop:3}}>Sleep disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="eight"  />
                <Text style={{color:'grey', marginTop:3}}>Muscular diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="nine"  />
                <Text style={{color:'grey', marginTop:3}}>Neurological diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="ten"  />
                <Text style={{color:'grey', marginTop:3}}>Ocular diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="eleven"  />
                <Text style={{color:'grey', marginTop:3}}>Skin diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="twelve"  />
                <Text style={{color:'grey', marginTop:3}}>Strokes*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="thirteen"  />
                <Text style={{color:'grey', marginTop:3}}>Autoimmune diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="fourteen"  />
                <Text style={{color:'grey', marginTop:3}}>Bone and joint diseases & disorders*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="fifteen"  />
                <Text style={{color:'grey', marginTop:3}}>Cancers*</Text>
            </View>
            <View style={{flexDirection:'row', paddingRight:32, marginTop:5, marginBottom:5, marginTop:15}}>
                <RNCheckBox control={control} name="sixteen"  />
                <Text style={{color:'grey', marginTop:3}}>Gastrointestinal diseases & disorders*</Text>
            </View>



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