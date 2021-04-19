import { useContext } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CartButtons from "./CartButtons";
import { Link } from "react-router-dom";

function Product({ id, name, price, description, image_url }) {

  return (
    <div>
      <Link to={`/products/${id}`}>
        <Card>
          <CardImg top width="100%" src={image_url} alt={name} />
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{price}</CardSubtitle>
          </CardBody>
        </Card>
      </Link>
      <CartButtons
        id={id}
        name={name}
        description={description}
        image_url={image_url} />
    </div>
  )
}

export default Product;