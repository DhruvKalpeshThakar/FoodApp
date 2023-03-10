import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const Favourites = (props:any) => {

    return(
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
        </View>
    )
  };
  
Favourites.navigationOptions = {
    headerTitle: 'Your Favourites'
}


  const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  
  export default Favourites;
  