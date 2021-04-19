import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {useContext} from "react";
import ProductContext from './ProductContext';
import Product from "./Product"

function Cart(){
  const {cart} = useContext(ProductContext);
  const filteredCart = new Set(cart);


  return(
    <div>
        {cart.map(p =>
        <Product 
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          description={p.description}
          image_url={p.image_url}
        />)}
    </div>
  )
}

export default Cart;