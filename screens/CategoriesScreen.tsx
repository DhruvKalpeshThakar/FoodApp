import React from 'react';
import { FlatList, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { HeaderButtons,Item } from 'react-navigation-header-buttons';
// import  HeaderButton   from '../components/HeaderButton';


import { CATEGORIES } from '../data/dummy-data';


const Categoriesscreen = (props: any) => {

    const renderGridItem = (itemData: any) => {

        // let TouchableCmp = TouchableOpacity;

        // if(Platform.OS === 'android' && Platform.Version >= 21){
        //     TouchableCmp = TouchableNativeFeedback;
        // }
        return (

            <View style={styles.back}>
                <StatusBar
                    // barStyle={'dark-content'}
                    animated={true}
                    hidden={true}
                    backgroundColor="#61dafb"

                />
                <Pressable
                    android_ripple={{ color: '#aaa' }}
                    // hitSlop={20}>

                    style={[styles.gridItem, { backgroundColor: itemData.item.color }]}
                    onPress={() => {
                        props.navigation.navigate
                            ("CategoryMeals", { categoryId: itemData.item.id });
                    }}>
                    <View >
                        <Text style={styles.title}>{itemData.item.title}</Text>
                    </View>
                </Pressable>
            </View>
        )
    }


    return (
        <FlatList
            // keyExtractor={(item, index) => item.id.toString()}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />

    );
};

// Categoriesscreen.navigationOptions = (navData:any) => {
// return {
//     headerTitle: 'Meal Categories',
//     headerLeft: (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>

//                 <Entypo onPress={() => {
//                 navData.navigation.toggleDrawer();
//             }} name='menu' color={'#fff'} size={22} style={{marginLeft:20}}  />

//         </HeaderButtons>

//     )
//     };
// };

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    back: {
        height: '100%',
        width: '50%',
        // backgroundColor: '#aa5500',
        backgroundColor: 'rgba(200,100,50,0.5)',
    },
    gridItem: {

        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'Julee-Regular',
        fontSize: 20,
        color: "#000"

    },
});

export default Categoriesscreen;
