import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Switch, Platform } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Colors from '../constants/Color';


const Categoriesmealscreen = (props: any) => {
    
    const [isVegetarian, setisVegetarian] = useState(false);
    const [isHealthy, setisHealthy] = useState(false);

    const renderMealItem = (itemData:any) => {
        return(
            <MealItem 
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability} 
            complexity={itemData.item.complexity}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetails',{mealId: itemData.item.id})
            }} />
        )
    }

    const catId = props.navigation.getParam('categoryId')
    
    const displayedMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >= 0
    )
    
    
    
    // const selectedCategory: any = CATEGORIES.find(cat => cat.id === catId);



    // useEffect(() => {
    //     console.log("goBack");

    // }, [])
    return (
        <View style={styles.screen}>
            <FlatList 
            data={displayedMeals} 
            renderItem={renderMealItem}
            style={{width:'100%'}}
            />
            <View style={styles.filterContainer}>
                <Text style={styles.title}>Vegetarian</Text>
                <Switch 
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    trackColor={{true: Colors.accentColor}}
                    value={isVegetarian} 
                    onValueChange={newValue => setisVegetarian(newValue)} />
                <Text style={styles.title}>Healthy</Text>
                <Switch 
                    thumbColor={Colors.primaryColor}
                    trackColor={{true: Colors.accentColor}}
                    value={isHealthy} 
                    onValueChange={newValue => setisHealthy(newValue)} />
            </View>
        </View>
    )
};

Categoriesmealscreen.navigationOptions = (navigationData: any) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory: any = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 400,
        width: '80%',
        borderRadius: 50,
        borderWidth:2,
        borderColor: "#000",
        backgroundColor: "#000"
    },
    title:{
        fontFamily:'Julee-Regular',
        fontSize: 25,
        // textDecorationLine: 'underline',
        // textDecorationColor: '#0fd',
        // textDecorationStyle: 'dotted',
        
        
    } 
        
    
});

export default Categoriesmealscreen;
