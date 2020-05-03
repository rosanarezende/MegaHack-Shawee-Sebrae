export const setProduct = (product) => ({
  type: "SET_PRODUCT",
  payload: {
    product
  }
})
export const setProductToDetail = (product) => ({
  type: "SET_PRODUCT_TO_DETAIL",
  payload: {
    product
  }
})
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: {
    product
  }
})