import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Platform,
    View,
} from 'react-native';
import MaterialIcon from "react-native-vector-icons/dist/MaterialIcons";
import { HEADER_HEIGHT, StatusBarHeight } from '../../../../utils/helpers';

const CustomHeader = ({ navigation, onSearchTextChanged}) => {
    const [ textInputValue, setTextInputValue ] = useState(null);

    useEffect(() => {
        if(textInputValue)
            onSearchTextChanged(textInputValue);
    },[textInputValue]);
    
    return <View style={[Styles.container, {
            height : StatusBarHeight + HEADER_HEIGHT
        }]}
    >
        <TouchableOpacity style={Styles.backButton}
            onPress={() => navigation.goBack()}
        >
            <MaterialIcon name="chevron-left" size={24} color="#666666"/>
        </TouchableOpacity>
        <View style={Styles.searchBarContainer}>
            <TextInput value={textInputValue}
                autoFocus={true}
                style={{fontSize : 13, padding : 0}}
                placeholder="Ne veriyim abime ?"
                onChangeText={(e) => setTextInputValue(e)}
            />
        </View>
    </View>;
};

const Styles = StyleSheet.create({
    backButton : {
        backgroundColor : "#EAEAEA",
        borderRadius : 50,
        left : 10,
        bottom : 5,
        alignItems : 'center',
        justifyContent : 'center',
        position : 'absolute',
        padding : 10
    },
    searchBarContainer : {
        left : 65,
        bottom : 5,
        right : 10,
//        width : 100,
        backgroundColor : "#EAEAEA",
        position : 'absolute',
        borderRadius : 50,
        paddingHorizontal : 15,
        paddingVertical : Platform.OS ==='ios' ? 12 : 8
    },
    container : {
        width : '100%',
        borderBottomWidth : 1,
        borderBottomColor : "#EAEAEA",
        backgroundColor : '#FFFFFF'
    }
});

export default CustomHeader;