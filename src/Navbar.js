import { useContext } from "react";
import {NavLink} from "react-router-dom";
import ProductContext from "./ProductContext"


function NavBar(){

  const {cart} = useContext(ProductContext);
  

  return(
    <nav>
      <NavLink to="/cart">Cart:{cart.length}</NavLink>
    </nav>
  )

}

export default NavBar;