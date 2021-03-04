import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import LoadingContainer from "../../components/loadingContainer";
import TextInput from "./components/textInput";
import Button from "./components/button";

import AuthContext from "../../context/auth";
import { mockLogin } from "../../mockApi/index";

import { IsStringValidAndNotEmpty } from "../../utils/helpers";

const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mailInputValue, setMailInputValue] = useState(null);
  const [passwordInputValue, setPasswordInputValue] = useState(null);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const { login } = useContext(AuthContext);

  useEffect(() => {
    setIsLoginButtonDisabled(
      !IsStringValidAndNotEmpty(mailInputValue) || 
      !IsStringValidAndNotEmpty(passwordInputValue)
    );
  }, [ mailInputValue, passwordInputValue])

  if( isLoading ) {
    return ( <LoadingContainer/> ); 
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/logo.png')} style={Styles.logo}/>
      <TextInput
        title="E-Mail"
        value={mailInputValue}
        onChangeText={setMailInputValue}
        style={Styles.textInput}
      />
      <TextInput 
        title="Şifre"
        value={passwordInputValue}
        onChangeText={setPasswordInputValue}
        secureTextEntry={true}
        style={Styles.textInput}
      />
      <Button label="Giriş Yap"
        disabled={isLoginButtonDisabled}
        onPress={() => {
        setIsLoading(true);

        mockLogin({mail : mailInputValue, password : passwordInputValue})
          .then((token) => login(token));
      }}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  textInput : {
    marginBottom : 15
  },
  logo : {
    marginBottom : 30
  }
});

export default LoginScreen;