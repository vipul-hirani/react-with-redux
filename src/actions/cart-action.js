export const UPDATE_CART = 'cart:updateCart';

export function updateCart(newCart) {
  return {
    type: UPDATE_CART,
    payload: {
      cart: newCart
    }
  }
}