import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactReducer from './contactsSlice'
import filterReducer from './filtersSlice'

const rootReducer = combineReducers({
    contact: contactReducer,
    filter: filterReducer
});


export const store = configureStore({
  reducer: rootReducer
});