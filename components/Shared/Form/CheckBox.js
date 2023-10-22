import { Controller } from "react-hook-form";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react';

const RNCheckBox = ({control, name, required}) => {
    
    return(
    <Controller
        control={control}
        rules={{ required: required }}
        render={({ field: { onChange, onBlur, value } }) => (
            <BouncyCheckbox
                onBlur={onBlur}
                onPress={onChange}
                isChecked={value}
            />
        )}
        name={name}
    />
    )
}

export default React.memo(RNCheckBox)