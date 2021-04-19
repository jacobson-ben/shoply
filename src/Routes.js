import {Route, Switch, Redirect} from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";



function Routes(){
  return(
    <Switch>
      <Route exact path="/">
        <ProductList/>
      </Route>
      <Route exact path="/products/:productId">
        <ProductDetails/>
      </Route>
      <Route exact path="/cart">
        <Cart/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}

export default Routes;