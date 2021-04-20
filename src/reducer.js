import { useReducer } from "react";


function reducer(state, action) {
  const{ products, cart } = state
  

  switch(action.type) {
    case 'add':
      let total = cart.count + 1
      if(!cart.items[action.id]) {
        return {...state, cart: {...state.cart, count: total, items: {...state.cart.items, [action.id]: {count: 1, ...products[action.id]}}}}
      }
      else {
        let itemCount = cart.items[action.id].count + 1
        return {...state, cart: {...state.cart, count: total, items: {...state.cart.items, [action.id]: {...state.cart.items[action.id], count: itemCount}}}}
      }
    case 'remove':
      const total1 = cart.count > 0 ? cart.count - 1 : 0
      if(cart.items[action.id].count === 1) {
        let newCart = {...cart.items}
        delete newCart[action.id]
        return {...state, cart: {...state.cart, count: total1, items: newCart}}
      }
      else {
        let itemCount = cart.items[action.id].count - 1
        return {...state, cart: {...state.cart, count: total1, items: {...state.cart.items, [action.id]: {...state.cart.items[action.id], count: itemCount}}}}
      }
    default: 
      throw new Error(`Unexpected action type: ${action.type}`);
  }
}

export default reducer;

