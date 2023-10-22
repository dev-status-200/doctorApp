import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useController, Controller } from "react-hook-form";
import React from 'react';

const RNInput = ({label, control, name, placeholder, required}) => {

    const { field } = useController({ control,  defaultValue:'',  name });
    
    return(
        <View style={{width:"100%"}}>
            {/* {label && <Text style={styles.label}>{label}</Text> }
            <TextInput style={styles.input} value={field.value} onChangeText={field.onChange} placeholder={placeholder} /> */}
            {label && <Text style={styles.label}>{label}</Text> }
            <Controller
                control={control}
                rules={{
                required: required,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name={name}
            />
        </View>
    )
}

export default React.memo(RNInput)

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
      mt2:{marginTop:20},
      mb2:{marginBottom:20},
});