import axios from 'axios'

const baseURL = "https://wngygx9wlh.execute-api.us-east-1.amazonaws.com/v1"

export const getProductsList = () => dispatch => {

    axios
        .get(`${baseURL}/products`)
        .then(response => {
            dispatch(setProductList(response.data.products))
        })
}



export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  payload: {
    productList
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