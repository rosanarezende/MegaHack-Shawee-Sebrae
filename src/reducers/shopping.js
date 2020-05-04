const initialState = {
  products: [],
  productToDetail: {},
  cartList: [],
  shoopingEvents: [
    {
      id: 1,
      date: 1588448549809,
      products: [
        {
          id: 1,
          name: 'Sampoo Herbal',
          value: 20.5,
          img: 'https://user-images.githubusercontent.com/45580434/80917398-00894280-8d35-11ea-9892-beedc8447fc2.jpg',
        },
        {
          id: 2,
          name: 'Esmalte',
          value: 12.95,
          img: 'https://user-images.githubusercontent.com/45580434/80917325-6e813a00-8d34-11ea-9879-9bc0390698e1.jpg',
        }
      ],
    }
  ],
  valueCashBack: 0 // ainda não implementei a lógica
}

const shopping = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_PRODUCT_LIST':
      return {
        ...state,
        products: action.payload.productList
      }
    case 'SET_PRODUCT_TO_DETAIL':
      return {
        ...state,
        productToDetail: action.payload.product
      }
    case 'ADD_TO_CART':
      let newCartList = state.cartList
      newCartList.push(action.payload.product)
      return {
        ...state,
        cartList: newCartList
      }
    default:
      return state
  }
}

export default shopping