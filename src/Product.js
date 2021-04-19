import { useContext } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import DispatchContext from './DispatchContext'

function Product({id, name, price, description, image_url }) {
  const dispatch = useContext(DispatchContext)

  function add() {
    dispatch({type: "add", product: {[id]:{name, price, description, image_url}}})
  }

  function remove() {
    dispatch({type: "add", id})
  }

  return (
    <div>
    <Card>
      <CardImg top width="100%" src={image_url} alt={name} />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
        <CardText>{description}</CardText>
        <Button onClick={add}>Add to Cart</Button>
        <Button onClick={remove}>Remove from Cart</Button>
      </CardBody>
    </Card>
  </div>
  )
}

export default Product;