import shoppingcart from './shoppingcart';
import shoppinglist from './shoppinglist';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    totalNum : shoppingcart,
    list : shoppinglist
})

export default allReducers;