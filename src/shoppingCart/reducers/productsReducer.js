import { Action } from '../actions/actionTypes'
const initialState = {
  products: [],
  product: null,
}

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Action.GET_ALL_PRODUCTS_LIST:
      return { ...state, products: payload }

    default:
      return {
        state,
      }
  }
}
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Action.GET_PRODUCT:
      return { ...state, product: payload }

    default:
      return {
        state,
      }
  }
}
