const initialState = {
    events: [
        {
            id: 1,
            title: 'event 1',
            startTime: '2020-05-01T16:38:49-03:00',
            endTime: '2020-05-01T17:38:49-03:00',
            description: "Descrição do evento 1"
        },
        {
            id: 2,
            title: 'event 2',
            startTime: '2020-05-02T12:00:00-03:00',
            endTime: '2020-05-02T12:30:00-03:00',
            description: "Descrição do evento 1"
        },
        {
            id: 2,
            title: 'event 2',
            startTime: '2020-05-02T09:30:00-03:00',
            endTime: '2020-05-02T10:00:00-03:00',
            description: "Descrição do evento 1"
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

        default:
            return state
    }
}

export default calendar