import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from './shoppingCart/components/ProductList'
import productDetail from './shoppingCart/components/productDetail'
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/product/:productId' component={productDetail} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
