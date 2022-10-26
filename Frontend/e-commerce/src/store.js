import {legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const reducers= combineReducers({

})
let initState={}


export const store= createStore(reducers,initState,composeWithDevTools(applyMiddleware(...middleware)));

