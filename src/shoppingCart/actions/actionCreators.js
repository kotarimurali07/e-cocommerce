import { Action } from './actionTypes'

export const getAllProducts = (products) => {
  return {
    type: Action.GET_ALL_PRODUCTS_LIST,
    payload: products,
  }
}
export const getProduct = (payload) => {
  return {
    type: Action.GET_PRODUCT,
    payload,
  }
}
