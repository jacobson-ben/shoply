import { useReducer } from "react";


function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return  {...state, cart: [...state.cart, action.product]}
    case 'remove':
      return {...state, cart: state.cart.filter(p => p[Object.keys(p)[0]].id !== action.id)}
    default: 
      throw new Error(`Unexpected action type: ${action.type}`);
  }
}

export default reducer;