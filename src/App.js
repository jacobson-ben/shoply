import './App.css';
import reducer from './reducer'
import products from './data'
import ProductContext from './ProductContext'
import DispatchContext from './DispatchContext'
import ProductList from './ProductList'
import {useReducer} from 'react'


function App() {
  const initialState = {products, cart: []}
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ProductContext.Provider value ={state.products}>
          <ProductList/>
        </ProductContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
