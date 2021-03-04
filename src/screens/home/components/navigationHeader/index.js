import React, { useContext } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    View,
    Text
} from 'react-native';
import MaterialIcon from "react-native-vector-icons/dist/MaterialIcons";
import AuthContext from "../../../../context/auth";
import { StatusBarHeight, HEADER_HEIGHT } from "../../../../utils/helpers";

const CustomHeader = ({navigation, onChangeSearchText}) => {
    const { logout } = useContext(AuthContext);

    return <View style={[Styles.container, {
            height : StatusBarHeight + HEADER_HEIGHT
        }]}
    >
        <TouchableOpacity style={Styles.searchBarContainer}
            onPress={() => navigation.navigate('Search')}
        >
            <MaterialIcon name="search" size={24} color="#666666"/>
            <Text style={Styles.searchBarLabel}>
                Aramak için dokunun
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.logoutButton}
            onPress={() => logout()}
        >
            <MaterialIcon name="power-settings-new" size={24} color="#666666"/>
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    logoutButton : {
        backgroundColor : "#EAEAEA",
        borderRadius : 50,
        right : 10,
        bottom : 5,
        alignItems : 'center',
        justifyContent : 'center',
        position : 'absolute',
        padding : 10
    },
    searchBarContainer : {
        left : 10,
        bottom : 5,
        right : 65,
        backgroundColor : "#EAEAEA",
        position : 'absolute',
        flexDirection : 'row',
        alignItems : 'center',
        borderRadius : 50,
        paddingHorizontal : 15,
        paddingVertical : 10
    },
    searchBarLabel : {
        marginLeft : 10,
        color : "#666666",
        fontWeight : '500',
        fontSize : 14
    },
    container : {
        width : '100%',
//        height : 92,
        borderBottomWidth : 1,
        borderBottomColor : "#EAEAEA",
        backgroundColor : "#FFFFFF"
    }
});

export default CustomHeader;