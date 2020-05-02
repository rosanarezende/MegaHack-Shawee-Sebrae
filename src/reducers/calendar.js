const initialState = {
    events: [
        {
            id: 1,
            title: 'event 1',
            startTime: '2020-05-01T16:38:49-03:00',
        },
        {
            id: 2,
            title: 'event 2',
            startTime: '2020-05-02T12:00:00-03:00',
        },
        {
            id: 3,
            title: 'event 3',
            startTime: '2020-05-02T09:30:00-03:00',
        },
        
    ],
    dialogOpen: false,
    eventDate: undefined,

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
    ],
    locations: [
        {
            id: 1,
            name: 'Salão do Fulano',
            value: undefined
        },
        {
            id: 2,
            name: 'À domicílio',
            value: 10
        }
    ]
}

const calendar = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_EVENTS':
            return {
                ...state,
                events: action.payload.events
            }

        case 'SET_OPEN_DIALOG':
            return {
                ...state,
                dialogOpen: action.payload.option
            }

        case 'SET_DATE':
            return {
                ...state,
                eventDate: action.payload.date
            }
        
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

export default calendar