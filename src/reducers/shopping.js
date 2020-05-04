const initialState = {
  products: [
    /* {
      id: 1,
      name: 'Shampoo Herbal',
      value: 30,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: 'https://user-images.githubusercontent.com/45580434/80917398-00894280-8d35-11ea-9892-beedc8447fc2.jpg'
    },
    {
      id: 2,
      name: 'Esmalte',
      value: 22.5,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: 'https://user-images.githubusercontent.com/45580434/80917325-6e813a00-8d34-11ea-9879-9bc0390698e1.jpg'
    },
    {
      id: 3,
      name: 'Maquiagem',
      value: 80,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: 'https://user-images.githubusercontent.com/45580434/80917442-4940fb80-8d35-11ea-9038-d2d926fd456a.jpg'
    }, */
  ],
  productToDetail:  {
    id: 1,
    name: 'Shampoo Herbal',
    value: 30,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: 'https://user-images.githubusercontent.com/45580434/80917398-00894280-8d35-11ea-9892-beedc8447fc2.jpg'
  },
  cartList:[]
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
        return{
          ...state,
          cartList: newCartList
        }
    default:
      return state
  }
}

export default shopping