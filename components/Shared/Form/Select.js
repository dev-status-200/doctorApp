import { StyleSheet, View, Text } from 'react-native';
import { useController } from "react-hook-form";
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';

const RNSelect = ({label, control, name, placeholder, defaul, list}) => {

    const { field } = useController({ control, defaultValue:defaul, name });
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState(list);

    return(
        <View style={{width:"100%"}}>
            {label && <Text style={styles.label}>{label}</Text> }
            <DropDownPicker
                open={open}
                setOpen={setOpen}
                items={items}
                setItems={setItems}
                placeholder={placeholder}
                style={{
                    backgroundColor:"white",
                    borderColor:"silver",
                    borderRadius:12,
                    marginTop:5
                }}
                value={field.value} 
                setValue={field.onChange}
                onChangeValue={field.onChange}
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