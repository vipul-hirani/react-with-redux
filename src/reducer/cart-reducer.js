import {UPDATE_CART} from './../actions/cart-action'

export default function cartReducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_CART:
      return action.payload.cart;
    default:
      return state
  }
}
