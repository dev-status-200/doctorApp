import { Controller } from "react-hook-form";
import RadioGroup from 'react-native-radio-button-group';
import React from 'react';
import { View, Text, StyleSheet } from "react-native"

const RNCheckBox = ({control, name, radios, values, label}) => {
    
    return(
        <View>
            {label && <Text style={styles.label}>{label}</Text> }
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RadioGroup
                        options={radios}
                        horizontal={true}
                        circleStyle={{ fillColor: 'orange', borderColor: 'orange' }}
                        onChange={onChange}
                        activeButtonId={values[name]}
                    />
                )}
                name={name}
            />
        </View>
    )
}

export default React.memo(RNCheckBox);

const styles = StyleSheet.create({
    label:{
        color:'black',
        fontSize:17,
        marginBottom:10
    },
});