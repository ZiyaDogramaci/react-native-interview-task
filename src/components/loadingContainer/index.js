import React from 'react';
import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingContainer = () => (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color="#FF5033"/>
    </View>
);

const styles = StyleSheet.create({
    loadingContainer : {
        flex : 1,
        justifyContent : 'center'
    }
});

export default LoadingContainer;