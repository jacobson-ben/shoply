import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {useContext} from "react";

import DispatchContext from "./DispatchContext";

function CartButtons({id, name, description, image_url, price}){

  const dispatch = useContext(DispatchContext);

  function add(e) {
    dispatch({type: "add", product: {id, name, price, description, image_url}});
  }

  function remove(e) {
    dispatch({type: "remove", id})
  }

  return(
    <div>
      <Button onClick={add}>Add to Cart</Button>
      <Button onClick={remove}>Remove from Cart</Button>
    </div>
  )
}

export default CartButtons;