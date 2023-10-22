import { StyleSheet, View, Text } from 'react-native';
import { Controller } from "react-hook-form";
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';

const RNSelect = ({label, control, name, placeholder, defaul, list, required}) => {

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(list);

    return(
        <View style={{width:"100%"}}>
            {label && <Text style={styles.label}>{label}</Text> }
            <Controller
            control={control}
            rules={{ required: required }}
            render={({ field: { onChange, onBlur, value } }) => (
                <DropDownPicker
                    open={open}
                    setOpen={setOpen}
                    items={items}
                    placeholder={placeholder}
                    style={{
                        backgroundColor:"white",
                        borderColor:"silver",
                        borderRadius:12,
                        marginTop:5,
                    }}
                    value={value} 
                    setValue={onChange}
                    onChangeValue={onChange}
                />
            )}
            name={name}
        />  
        </View>
    )
}

export default React.memo(RNSelect)

const styles = StyleSheet.create({
    label:{
        color:'black',
        fontSize:17
    },
});