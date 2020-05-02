const initialState = {
  actualPage: 'home'
}

const navigation = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_ACTUAL_PAGE':
      return {
        ...state,
        actualPage: action.payload.page
      }
    default:
      return state
  }
}

export default navigation