import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Text, View, StyleSheet} from 'react-native';
import Color from '../constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomHeaderButton = (props:any) => {
    return <HeaderButton {...props}  color={Color.primaryColor} />;
    
};

const styles = StyleSheet.create({


});


export default CustomHeaderButton;