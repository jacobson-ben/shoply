import { useContext } from "react";
import ProductContext from "./ProductContext";
import Product from './Product'

function ProductList() {
  const{ products }= useContext(ProductContext);
  

  return (
    <div>
      {Object.keys(products).map(p =>
        <Product 
          key={p}
          id={p}
          name={products[p].name}
          price={products[p].price}
          description={products[p].description}
          image_url={products[p].image_url}
        />)}
    </div>
  )
}

export default ProductList;