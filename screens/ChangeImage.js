import * as React from 'react';
import { View, Image, BackHandler, TouchableOpacity, Text } from 'react-native';
import { Dialog, Portal, Divider, Avatar, Button, TextInput } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddItems({navigation}) {

  const [visible, setVisible] = React.useState(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, height:"100%"};

  const [name,  setName ] = React.useState("");
  const [qty,   setQty  ] = React.useState("");
  const [color, setColor] = React.useState("");
  const [image, setImage] = React.useState("");

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSubmit = async() => {
    const jsonValue = await AsyncStorage.getItem('@MyItemsList');
    let item = {
        name:name,
        qty:qty,
        color:color,
        id:jsonValue!=null?JSON.parse(jsonValue).length+1:1,
        image:image
    }
    
    let tempArray = jsonValue!=null? [...JSON.parse(jsonValue)] : [];
    tempArray.push(item);
    console.log(tempArray)
    try {
      await AsyncStorage.setItem('@MyItemsList', JSON.stringify(tempArray));
    } catch (error) {
      return
    }
    setName("") 
    setQty("")  
    setColor("")
    setImage("")
    showDialog()
  }

  const imageGalleryLaunch = async() => {
    launchImageLibrary({
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setImage(res?.assets[0]?.uri)
      }
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor:'white', padding:20 }}>

        <TouchableOpacity
          style={{margin:10}}
          activeOpacity={0.5}
          onPress={imageGalleryLaunch}>
          <Text >Select File</Text>

        </TouchableOpacity>
        {image!="" &&<Image
          source={{ uri: image }}
          style={{ width: "50%", height: "25%", alignSelf:'center', borderColor:'grey', borderWidth:1, padding:1 }}
        />}

    </View>
  )}

export default AddItems;