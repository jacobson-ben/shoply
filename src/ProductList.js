import { useContext } from "react";
import ProductContext from "./ProductContext";
import Product from './Product'

function ProductList() {
  const products = useContext(ProductContext)
  

  return (
    <div>
      {products.map(p =>
        <Product 
          key={Object.keys(p)[0]}
          id={Object.keys(p)[0]}
          name={p[Object.keys(p)[0]].name}
          price={p[Object.keys(p)[0]].price}
          description={p[Object.keys(p)[0]].description}
          image_url={p[Object.keys(p)[0]].description}
        />)}
    </div>
  )
}

export default ProductList;