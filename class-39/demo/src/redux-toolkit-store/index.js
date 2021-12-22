import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';

import simpsonsSlice from './simpsons.store';

const reducers = combineReducers({ simpsons: simpsonsSlice });

const store = configureStore({ reducer: reducers }, composeWithDevTools());

export default store;