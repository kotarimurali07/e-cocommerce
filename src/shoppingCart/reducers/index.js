import { combineReducers } from 'redux'
import { productsReducer, productReducer } from './productsReducer'
export const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
})
