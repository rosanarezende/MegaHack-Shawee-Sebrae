const initialState = {
    events: [],
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
            return {
                ...state,
                events: action.payload.event
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