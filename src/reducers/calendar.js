const initialState = {
    events: [
        {
            id: 1,
            title: 'Corte de cabelo Masculino',
            startTime: '2020-05-01T16:38:49-03:00',
            localId: 1,
            observation: undefined
        },
        {
            id: 2,
            title: 'Corte de cabelo femino',
            startTime: '2020-05-02T12:00:00-03:00',
            localId: 2,
            observation: "Corte da moda"
        },
        {
            id: 3,
            title: 'Descoloração',
            startTime: '2020-05-02T09:30:00-03:00',
            localId: 1,
            observation: "Cor vermelha"
        },
    ],
    dialogOpen: false,
    eventDate: undefined,    
}

const calendar = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_EVENTS':
            return {
                ...state,
                events: action.payload.events
            }

        case 'ADD_EVENT':
            const newEvents = state.events
            newEvents.push(action.payload.event)
            return {
                ...state,
                events: newEvents
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

        default:
            return state
    }
}

export default calendar