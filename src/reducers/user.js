const initialState = {
    user: {}
}

const user = (state = initialState, action) => {

    switch (action.type) {

        case 'STORE_USER': 
            return {
                ...state,
                user: action.payload.user
            }


        default:
            return state
    }

}

export default user