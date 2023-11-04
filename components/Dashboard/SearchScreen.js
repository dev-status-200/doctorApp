import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntdIcons from 'react-native-vector-icons/AntDesign';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import axios from "axios";
import urls from "../../urls.json"
import DoctorsProfile from './DoctorsProfile';

const SearchScreen = ({serSearch}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerms, setSearchTerms] = useState([]);
    const [type, setType] = useState("");
    
    const [doctorSearchTerm, setDoctorSearchTerm] = useState("");
    const [doctorList, setDoctorList] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
      getValue();
    }, [])

    async function getValue(){
        axios.get(`${urls.local_url}/doctor/getSpecialications`)
        .then((x)=>{
            setSearchTerms(x.data.result)
        })
    }

    const Header = (props) => {
    return(
        <>
        <View style={{flexDirection:'row', padding:15, justifyContent:'space-between'}}>
            <View style={{width:"25%"}}>
                <TouchableOpacity onPress={()=>serSearch(false)}>
                    <AntdIcons name="leftcircle" color={"#D86321"} size={30} />
                </TouchableOpacity>
            </View>
            <View style={{width:"50%", padding:2}}>
                <Text style={{textAlign:'center', fontSize:22, color:'black', fontWeight:'500'}}>
                    {props.type==""?"Search":props.type}
                </Text>
            </View>
            <View style={{width:"25%"}}></View>
        </View>
        <View style={{backgroundColor:'silver', height:1, marginLeft:15, marginRight:15}}></View>
        </>
        )
    }

    const searchDoctor = (name) => {
        setType(name);
        axios.get(`${urls.local_url}/doctor/searchDoctors`,{
            headers:{
                'type':`${name}`
            }
        })
        .then((x)=>{
            setDoctorList(x.data.result);
            setLoad(false)
        })
    }
    
  return (
    <View style={styles.barContainer}>
        <Header type={type} />
        {type=="" && 
        <>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                <View style={{padding:"1%", width:'75%'}}>
                    <TextInput style={styles.searchBar} placeholder='Search' 
                        value={searchTerm} onChangeText={(e)=>setSearchTerm(e)} 
                    />
                    <EvilIcons name={"search"} color={'orange'} style={{position:'absolute', bottom:"37%", left:"5%"}} size={35} />
                </View>
                <View style={{padding:"1%", width:'25%'}}>
                    <TouchableOpacity style={styles.selectBar}>
                        <AntdIcons name={"down"} color={'orange'} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding:10, marginTop:3}}>
            <Text style={styles.heading}>Popular Specialities</Text>
            {searchTerms.filter((x)=>{
                if(searchTerm==""){
                    return x;
                }else {
                    return x.name.includes(searchTerm)
                }
            }).map((x, i)=>{
                return(
                    <TouchableOpacity key={i} style={{marginBottom:10}}
                        onPress={()=>searchDoctor(x.name)}
                    >
                        <Text style={styles.specialties}>{x.name}</Text>
                    </TouchableOpacity>
                )
            })}
            </View>
        </>
        }

        {type!="" &&
        <>
        {load && <ActivityIndicator style={{marginTop:"80%"}} size={"large"} color={"#D86321"} /> }

        {!load &&
        <>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10, marginBottom:20}}>
            <View style={{padding:"1%", width:'75%'}}>
                <TextInput style={styles.searchBar} placeholder='Search By Name' 
                    value={doctorSearchTerm} onChangeText={(e)=>setDoctorSearchTerm(e)} 
                />
                <EvilIcons name={"search"} color={'orange'} style={{position:'absolute', bottom:"37%", left:"5%"}} size={35} />
            </View>
            <View style={{padding:"1%", width:'25%'}}>
                <TouchableOpacity style={styles.selectBar}>
                    <AntdIcons name={"down"} color={'orange'} size={20} />
                </TouchableOpacity>
            </View>
        </View>
        <DoctorsProfile doctors={doctorList} search={true} term={doctorSearchTerm} />
        { (doctorList.length==0 && load==false) && <Text style={{margin:10, fontSize:18}}>No results Found...</Text> }
        </>
        }
        </>}
    </View>
  )
}

export default React.memo(SearchScreen)

const styles = StyleSheet.create({
    barContainer:{
        margin:1,
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
    },
    searchBar:{
        backgroundColor:'#F6F7F9',
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        paddingLeft:50
    },
    selectBar:{
        backgroundColor:'#F6F7F9',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        paddingTop:12,
        paddingLeft:20,
        paddingBottom:16
    },
    heading:{
        fontSize:20,
        color:'#36454F',
        marginBottom:10,
        fontWeight:'700'
    },
    specialties:{
        color:'#36454F',
        fontSize:16
    }
})