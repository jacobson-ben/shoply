import { useContext } from "react";
import ProductContext from "./ProductContext";
import Product from './Product'

function ProductList() {
  const{ products }= useContext(ProductContext);
  

  return (
    <div>
      {products.map(p =>
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

export default ProductList;