// import React from 'react';
import { MEALS } from '../../data/dummy-data';


const initialState = {
    meals:MEALS,
    filteredMeals: MEALS,
    favouriteMEals: []
}

const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer; 