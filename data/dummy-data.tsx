import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
    new Category('c1', 'Starter', '#ffc7ff'),
    new Category('c2', 'Beverages', '#b9ffb0'),
    new Category('c3', 'Burgers', '#f5428d'),
    new Category('c4', 'Breakfast', '#9eecff'),
    new Category('c5', 'Gujarati', '#f54242'),
    new Category('c6', 'South Indian', '#f5d142'),
    new Category('c7', 'PavBhaji', '#368dff'),
    new Category('c8', 'Chinese', '#41d95d'),
    new Category('c9', 'Italian', '#f5428d'),
    new Category('c10', 'Dessert', '#47fced')

];

export const MEALS = [
    new Meal(
        'm1',
        ['c1','c8'],
        'Manchurian Gravy',
        'Medium-High Price',
        'complex',
        'https://www.spiceupthecurry.com/wp-content/uploads/2017/01/veg-manchurian-dry-recipe-9.jpg',
        45,
        [
            "½ cup grated carrot",
            "½ cup finely chopped cabbage(purple or green)",
            "¼ cup finely chopped green bell pepper(capsicum)",
            "¼ cup finely chopped spring onions(scallions)"
      ],
    false,
    true,
      
    ),

    new Meal(
        'm2',
        ['c2','c10'],
        'Coldrinks',
        'Low-Medium Price',
        'Simple',
        'https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg',
        5,
        [
            "Water",
            "Soda",
            "Flavoured Squash",
            "Ice",
            
      ],
    true,
    true,
      
    ),

    new Meal(
        'm3',
        ['c3'],
        'Veg.Whooper',
        'Medium-High Price',
        'Simple',
        'https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg',
        40,
        [
            
            "Pav",
            "Tikki",
            "Chutney",
            "Vegetables" ,            
      ],
    false,
    true,
      
    ),


    new Meal(
        'm4',
        ['c4'],
        'Bread-Butter',
        'Low-Medium Price',
        'Simple',
        'https://img.freepik.com/free-photo/close-up-melted-cheese-sandwich_23-2149286864.jpg?size=626&ext=jpg',
        15,
        [
            "Bread",
            "Butter",
            "Extra Toppings",
                       
      ],
    true,
    true,
      
    ),


    new Meal(
        'm5',
        ['c5'],
        'Khichdi-Dish',
        'Low Price',
        'Simple',
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/khichdi-recipe.jpg',
        30,
        [
            "Rice",
            "Dal",
            "Vegetables"           
      ],
    true,
    true,
      
    ),

    new Meal(
        'm6',
        ['c6'],
        'Masala Dosa',
        'Medium-High Price',
        'Simple',
        'https://img.freepik.com/free-photo/dosa-also-called-dosai-dosey-dosha-is-thin-pancake-south-indian-cuisine_466689-91643.jpg',
        30,
        [
            "Kheeru",
            "Sambhar",
            "Chutney",
            "Stuffing",           
      ],
    true,
    true,
      
    ),


    new Meal(
        'm7',
        ['c7'],
        'PavBhaji',
        'Medium-High Price',
        'Simple',
        'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg',
        30,
        [
            "Pav",
            "Oil",
            "Butter/Cheese (Optional)",
            "Vegetables",           
      ],
    true,
    true,
      
    ),

    new Meal(
        'm8',
        ['c8'],
        'Chinese Bhel',
        'Medium-High Price',
        'Simple',
        'https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74561.jpg',
        30,
        [
            "Soya Sauce",
            "Red Chilli Sauce",
            "Green Chilli Sauce",
            "Vegetables",
            "Manchurian Dry",           
            "Manchurian Rice",           
            "Manchurian Noodles",
            "Chinese Sev",           
      ],
    true,
    true,
      
    ),

    new Meal(
        'm9',
        ['c9'],
        'Pizza',
        'Medium-High Price',
        'Simple',
        'https://img.freepik.com/free-photo/front-view-pizza-with-cheese-brown-round-wooden-desk-dark-surface_140725-14476.jpg',
        30,
        [
            "Pizza Bread",
            "Mozarella Cheese",
            "Olive/Capsicum/Onion/Paneer",
            "Corn/Jalapeno/Pineapple",
            "Oregano and Chilli Flakes(Mandatory)",
            
                       
      ],
    true,
    true,
      
    ),

    new Meal(
        'm10',
        ['c10'],
        'Brownie-IceCream',
        'Medium-High Price',
        'Simple',
        'https://img.freepik.com/free-photo/vanilla-ice-cream-with-chocolate-brownie-cake-with-strawberry_1203-9192.jpg',
        30,
        [
            "Brownie",
            "Flavoured IceCream",           
      ],
    true,
    true,
      
    ),


    

  



];