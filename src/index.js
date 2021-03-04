import React, { useReducer, useEffect } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchScreen from './screens/search';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import CustomHeaderHomeScreen from "./screens/home/components/navigationHeader";

import LoadingContainer from "./components/loadingContainer";

import AuthContext from './context/auth';

const Stack = createStackNavigator();

const initialState = {
    isLoading : true,
    userToken : null
};

function reducer(prevState, action) {
    switch(action.type) {
        case 'TOKEN_MISSING':
            return {
                isLoading : false,
                userToken : undefined                
            };
        case 'TOKEN_EXISTS':
        case 'LOGIN':
            AsyncStorage.setItem('user_token', action.token);
            return {
                isLoading : false,
                userToken : action.token
            };
        case 'LOGOUT':
            AsyncStorage.removeItem('user_token');
            return {
                isLoading : false,
                userToken : undefined
            };
    }
}

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        AsyncStorage.getItem("user_token")
            .then((token) => token
                ? dispatch({type : 'TOKEN_EXISTS', token})
                : dispatch({type : 'TOKEN_MISSING'})
            );
    },[]);

    if ( state.isLoading ) {
        return ( <LoadingContainer/> ); 
    }

    return (
        <AuthContext.Provider value={{
            login : (token) => dispatch({type : 'LOGIN', token }),
            logout : () => dispatch({type : 'LOGOUT'})
        }}>
            <NavigationContainer>
                { state.userToken ? (
                    <Stack.Navigator initialRouteName="Home" >
                        <Stack.Screen name="Home" 
                            component={HomeScreen} 
                            options={{
                                header : ({...props}) => <CustomHeaderHomeScreen {...props}/>
                            }}
                            initialParams={{token : state.userToken}}
                        />
                        <Stack.Screen name="Search"
                            component={SearchScreen}
                            initialParams={{token : state.userToken}}
                        />
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator initialRouteName="Login" headerMode='none'>
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

const Styles = StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        backgroundColor : 'red'
    }
});

export default App;