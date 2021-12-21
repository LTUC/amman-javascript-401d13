import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import quoteReducer from './quote';
// import thunk from './midleware/thunk';

let reducers = combineReducers({
  quote: quoteReducer
})

const store = () => 
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store();