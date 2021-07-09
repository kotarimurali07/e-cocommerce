import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import Product from './Product'
import axios from 'axios'
import { getAllProducts } from '../actions/actionCreators'
import { useSelector, useDispatch } from 'react-redux'
const ProductList = () => {
  const dispatch = useDispatch()
  const allitemsData = useSelector((state) => state.allProducts.products)
  //   console.log(allitemsData)
  const getData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        // console.log(response.data)
        dispatch(getAllProducts(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getData()
  })
  if (allitemsData) {
    return (
      <div className='ui grid container'>
        {allitemsData.map((item) => (
          <Product
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    )
  }
  return (
    <div className='spinner' style={{ alignItems: 'center' }}>
      <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
    </div>
  )
}

export default ProductList
