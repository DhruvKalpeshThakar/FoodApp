import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Categoriesscreen from '../screens/CategoriesScreen';
import Categoriesmealscreen from '../screens/CategoryMealsScreen';
import Mealdetail from '../screens/MealDetailScreen';
import Colors from '../constants/Color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
import Favourites from '../screens/FavouritesScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',

};


// const FavNavigator = createStackNavigator({
//     Favourites: {
//         screen: Favourites,
//     },
//         Mealdetail: {
//         screen: Mealdetail,
//     }, 
//     {
//         // mode: 'modal', In Android It won't make any Difference
//         defaultNavigationOptions: defaultStackNavOptions

//     },

// });


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: Categoriesscreen,

    },
    CategoryMeals: {
        screen: Categoriesmealscreen,
    },
    MealDetails: {
        screen: Mealdetail
    }
},
    {
        // mode: 'modal', In Android It won't make any Difference
        defaultNavigationOptions: defaultStackNavOptions

    }

);


// const BottomTab = createBottomTabNavigator({
//      Meals: {
//      screen: MealsNavigator
//      },
//      Favourites: {
//         screen: Favourites
//     }
//  });



export default createAppContainer(MealsNavigator);