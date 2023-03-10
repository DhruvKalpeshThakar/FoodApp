import React from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator';
// import { BottomTab } from './navigation/MealsNavigator';
// import { create Store,combineReducers } from 'redux';
// import { Provider } from 'react-redux';
enableScreens();

const Home = () => {
    return (
        
        <MealsNavigator />
        
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    text: {
        fontFamily: 'Julee-Regular',
        fontSize: 50,
    }
});

export default Home;
