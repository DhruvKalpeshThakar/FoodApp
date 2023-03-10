import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import DefaultText from "./DefaultText";


const MealItem = (props: any) => {
    // console.log(props);

    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            //source={{ uri: 'https://www.spiceupthecurry.com/wp-content/uploads/2017/01/veg-manchurian-dry-recipe-9.jpg' }}
                            source={{ uri: props.image }}
                            style={styles.bgimage} >
                            <Text style={styles.title}>{props.title}</Text>
                        </ImageBackground>

                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.duration}min</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
};


const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#aa5500',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    mealHeader: {
        height: '90%',

    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
    },
    bgimage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        // fontFamily: 'Julee-Regular',
        fontSize: 22,
        color: '#fff',
        backgroundColor: '#410101',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',

    }

})


export default MealItem;