const initialState = {
    user: {
        id: 1,
        email: 'maria@email.com',
        password: '123456',
        photo: 'https://user-images.githubusercontent.com/45580434/80921703-51596500-8d4e-11ea-86af-c8f51bc14d49.jpeg',

        name: 'Maria',
        address: 'Rua das Flores, n 10'
    }
}

const user = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_USER': 
            return {
                ...state,
                user: action.payload.user
            }


        default:
            return state
    }

}

export default user