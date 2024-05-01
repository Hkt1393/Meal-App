import {createSlice} from '@reduxjs/toolkit';
import {MEALS} from '../../components/Data/Data';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const featureSlice = createSlice({
  name: 'meal',
  initialState: initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const existingIndex = state.favoriteMeals.findIndex(
        meals => meals.id === action.payload,
      );
      if (existingIndex !== -1) {
        state.favoriteMeals.splice(existingIndex, 1);
      } else {
        const mealsToAdd = state.meals.find(meal => meal.id === action.payload);
        if (mealsToAdd) {
          state.favoriteMeals.push(mealsToAdd);
        }
      }
    },
    filteredMeals: (state, action) => {
      const {glutenFree, lactoseFree, vegan, vegetarian} = action.payload;
      state.filteredMeals = state.meals.filter(meal => {
        if (
          (glutenFree && !meal.isGlutemFree) ||
          (lactoseFree && !meal.isLactoseFree) ||
          (vegan && !meal.isVegan) ||
          (vegetarian && !meal.isVegitarian)
        ) {
          return false;
        }
        return true;
      });
    },
  },
});

export const {toggleFavorite, filteredMeals} = featureSlice.actions;

export default featureSlice.reducer;
