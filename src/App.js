import './App.css';
import reducer from './reducer'
import products from './data'
import ProductContext from './ProductContext'
import DispatchContext from './DispatchContext'
import ProductList from './ProductList'
import {useReducer} from 'react'
import Routes from "./Routes";
import {BrowserRouter } from "react-router-dom";
import NavBar from "./Navbar";

function App() {
  // let initialProducts = [];
  // for(let key in products.products){
  //   let product = products.products[key];
  //   let {name, description, price, image_url} = product;
  //   initialProducts.push(({id: key, name, description, price, image_url}));
  // }

  const PRODUCT_INITIAL_STATE = products.products
  const CART_INITIAL_STATE = {items: {}, count: 0}
                    
  const initialState = {products: PRODUCT_INITIAL_STATE, cart: CART_INITIAL_STATE}
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <div className="App">
      <BrowserRouter>
          <DispatchContext.Provider value={dispatch}>
          <ProductContext.Provider value ={state}>
            <NavBar/>
            <Routes/>
          </ProductContext.Provider>
        </DispatchContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
