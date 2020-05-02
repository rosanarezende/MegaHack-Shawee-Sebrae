export const setEvents = (events) => ({
    type: "SET_EVENTS",
    payload: {
        events
    }
})

export const setOpenDialog = (option) => ({
    type: "SET_OPEN_DIALOG",
    payload: {
        option
    }
})

export const setDate = (date) => ({
    type: "SET_DATE",
    payload: {
        date
    }
})

export const addEvent = (event) => ({
    type: "ADD_EVENT",
    payload: {
        event
    }
})
