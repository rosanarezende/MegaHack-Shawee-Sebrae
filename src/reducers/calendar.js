const initialState = {
    events: [
        // {
        //     id: 1,
        //     title: 'Corte de cabelo Masculino',
        //     startTime: 1588448549809,
        //     endTime: 1588448549809,
        //     localId: 1,
        //     observation: undefined
        // },
        // {
        //     id: 2,
        //     title: 'Corte de cabelo femino',
        //     startTime: 1588431600000,
        //     endTime: 1588433400000,
        //     localId: 2,
        //     observation: "Corte da moda"
        // },
        // {
        //     id: 3,
        //     title: 'Descoloração',
        //     startTime: 1588863600000,
        //     endTime: 1588871400000,
        //     localId: 1,
        //     observation: "Cor vermelha"
        // },
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