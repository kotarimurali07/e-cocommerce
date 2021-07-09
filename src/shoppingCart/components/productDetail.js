import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getProduct } from '../actions/actionCreators'
import { useDispatch, useSelector } from 'react-redux'
const ProductDetail = () => {
  const product = useSelector((state) => state.product.product)
  console.log(product)
  const dispatch = useDispatch()
  const { productId } = useParams()
  const getProductData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        dispatch(getProduct(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    if (productId) {
      getProductData()
    }
  })
  //   console.log(productId)
  return (
    <div>
      <h1>prodect details</h1>
    </div>
  )
}

export default ProductDetail
