import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DefaultText from '../components/DefaultText';

import { MEALS } from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';

const Mealdetail = (props: any) => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal: any = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView style={styles.screen}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}min</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            </View>


            <Text style={styles.title}>Ingredients </Text>
            {selectedMeal.ingredients.map((ingredient: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.Key | null | undefined) => {
                return <Text style={styles.recipe}> -- {ingredient}</Text>;
            })}


            {/* <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <TouchableOpacity activeOpacity={0.6} 
            style={{ backgroundColor: '#f00', padding: 20, borderRadius: 15 }}
                onPress={() => props.navigation.popToTop()
                } ><Text>Go Back to Categories </Text></TouchableOpacity>
        </View> */}
        </ScrollView>
    )
};

Mealdetail.navigationOptions = (navigationData: any) => {

    const mealId = navigationData.navigation.getParam('mealId');

    const selectedMeal: any = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () =>
            // <View style={{marginRight:-50}}>
            //     <AntDesign name='star' color={'#fff'} size={15} />
            // </View>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title='Favourite' //Key for item Should be Unique
                    // iconName='ios-star'

                    onPress={() => {
                        // console.log('Mark as Favourite')
                    }}

                />
                <AntDesign name='star' color={'rgb(223,164,9)'} size={22} style={{ marginRight: 10 }} onPress={() => {
                        console.log('Mark as Favourite')
                    }} />
            </HeaderButtons>

    };

};


const styles = StyleSheet.create({
    // screen: {
    //     flex:1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    image: {
        width: '100%',
        height: 200,
        overflow: 'hidden'
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        borderBottomColor: '#09f',
        // alignItems: 'center',
        backgroundColor: '#29adfc',
        borderBottomWidth: 2
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 4,
        textDecorationLine: 'underline',
    },
    // icon: {
    //     backgroundColor: '#979797',
    // },
    recipe: {
        marginVertical: 10,
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 15,
        backgroundColor: '#e2b497',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginLeft: '9%',
        width: '80%',
        alignItems: 'center',



    },
    screen: {
        backgroundColor: '#804000'
    }
});

export default Mealdetail;
