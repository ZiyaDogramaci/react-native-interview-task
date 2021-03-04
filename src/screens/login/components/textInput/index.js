import React, { useState, useEffect } from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { IsStringValidAndNotEmpty } from '../../../../utils/helpers';

const FOCUSED_COLOR = "#FF664C";
const DEFAULT_PLACEHOLDER = "düzenlemek için dokunun";

const TextInput = ({value, title, style, onChangeText, ...props}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [_value, setValue] = useState(value);

    useEffect(() => {
        if(onChangeText) onChangeText(_value);
    }, [_value]);

    return <View style={[
            styles.container,
            style,
            {
                borderColor : isFocused ? FOCUSED_COLOR : "#CCCCCC"
            }
        ]}
    >
        <Text style={[
                styles.title,
                {
                    color : isFocused 
                        ? FOCUSED_COLOR
                        : ( IsStringValidAndNotEmpty(value) ? FOCUSED_COLOR : "#0C0C0C" )
                }
            ]}
            numberOfLines={1}
        >
            {title}
        </Text>
        <NativeTextInput 
            {...props}
            style={{padding : 0}}
            value={_value}
            placeholder={DEFAULT_PLACEHOLDER}
            onChangeText={e => setValue(e)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}            
        />
    </View>
};

const styles = StyleSheet.create({
    container : {
        width : '80%',
        borderWidth : 1.5,
        borderRadius : 50,
        paddingHorizontal : 18,
        paddingVertical : 5
    },
    title : {
        fontSize : 11,
        fontWeight : '700',
        alignSelf : 'stretch',
        marginBottom : 5
    },
    textInput : {
        alignSelf : 'stretch',
        paddingHorizontal : 15
    }
});

export default TextInput;