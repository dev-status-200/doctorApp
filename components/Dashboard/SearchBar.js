import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchBar = ({serSearch}) => {

    const [username, setUsername] = useState("");

    useEffect(() => {
      getValue();
    }, [])

    async function getValue(){
        const values = JSON.parse(await AsyncStorage.getItem("login"));
        setUsername(values.user);
    }
    
  return (
    <View style={styles.barContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:'18%'}}>
                <EvilIcons name={"user"} color={'white'} size={60} style={{position:'relative', bottom:3}} />
            </View>
            <View style={{width:"64%"}}>
                <Text style={{color:'white', fontSize:20, fontWeight:'600'}}>Welcome {username}</Text>
                <Text style={{color:'white', marginTop:0}}>
                    <Entypo name="location-pin" />{" "}
                    <Text >Your Location Here</Text>{"  "}
                    <Entypo name={"edit"} color={'orange'} size={10}  />
                </Text>
            </View>
            <View style={{width:"18%", flexDirection:'row'}}>
                <EvilIcons name={"bell"} color={'white'} size={30} />
                <EvilIcons name={"heart"} color={'white'} size={30} />
            </View>
        </View>
        <View style={{padding:"3%", marginTop:15}}>
            {/* <TextInput style={styles.searchBar} placeholder='Search' disabled={true} /> */}
            <TouchableOpacity style={{padding:15, paddingLeft:50, backgroundColor:'white', borderRadius:50}}
                onPress={()=>serSearch(true)}
            >
                <Text>Search</Text>
            </TouchableOpacity>
            <EvilIcons name={"search"} color={'orange'} style={{position:'absolute', bottom:"50%", left:"5%"}} size={35} />
        </View>
    </View>
  )
}

export default React.memo(SearchBar)

const styles = StyleSheet.create({
    barContainer:{
        margin:1,
        backgroundColor:'#36454F',
        borderRadius:15,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:20,
    },
    searchBar:{
        backgroundColor:'white',
        borderRadius:25,
        paddingLeft:50
    }
})