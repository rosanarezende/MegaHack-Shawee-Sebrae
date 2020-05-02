const initialState = {
    services: [
        {
            id: 1,
            name: 'Corte de cabelo masculino',
            value: 30,
            durationTime: 20
        },
        {
            id: 2,
            name: 'Corte de cabelo feminino',
            value: 50,
            durationTime: 60
        },
        {
            id: 3,
            name: 'Descoloração',
            value: 60,
            durationTime: 90
        },
    ],
    locations: [
        {
            id: 1,
            name: 'Salão do Fulanão',
            value: undefined
        },
        {
            id: 2,
            name: 'À domicílio',
            value: 10
        }
    ]
}

const professional = (state = initialState, action) => {

    switch (action.type) {
        
        case 'SET_SERVICES': 
            return {
                ...state,
                services: action.payload.services
            }

        case 'SET_LOCATIONS':
            return {
                ...state,
                locations: action.payload.locations
            }

        default:
            return state
    }
}

export default professional