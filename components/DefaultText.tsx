import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DefaultText = (props:any) => {
    return <Text style={styles.text}>{props.children}</Text>
}

const styles = StyleSheet.create({
    text:  {
        fontFamily: 'Julee-Regular',
        color: '#fff'
    }
})


export default DefaultText;
