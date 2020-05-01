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
    eventDate: undefined
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

        default:
            return state
    }
}

export default calendar