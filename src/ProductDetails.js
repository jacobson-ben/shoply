import ProductContext from "./ProductContext";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { useContext } from "react";
import {useParams} from "react-router-dom";
import CartButtons from "./CartButtons";

function ProductDetails() {

  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find(p => p.id === productId);
  let { id, name, image_url, description, price } = product;

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image_url} alt={name} />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
          <CardText>{description}</CardText>
          <CartButtons
            id={id}
            name={name}
            description={description}
            image_url={image_url} />
        </CardBody>
      </Card>
    </div>
  )


}


export default ProductDetails;