import {legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from './Reducers/productsReducer';

const middleware = [thunk];

const reducers= combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
})
let initState={}


export const store= createStore(reducers,initState,composeWithDevTools(applyMiddleware(...middleware)));

