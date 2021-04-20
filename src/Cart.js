import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {useContext} from "react";
import ProductContext from './ProductContext';
import Product from "./Product"

function Cart(){
  const {cart} = useContext(ProductContext);
  console.log(cart)

  return(
    <div>
        {Object.keys(cart.items).map(i =>
        <Product 
          key={i}
          id={i}
          name={cart.items[i].name}
          price={cart.items[i].price}
          description={cart.items[i].description}
          image_url={cart.items[i].image_url}
          count={cart.items[i].count}
        />)}
    </div>
  )
}

export default Cart;