import axios from 'axios'

const baseURL = "https://wngygx9wlh.execute-api.us-east-1.amazonaws.com/v1"

export const setEvents = (events) => ({
    type: "SET_EVENTS",
    payload: {
        events
    }
})

export const getEvents = () => dispatch => {
    axios
        .get(`${baseURL}/events`)
        .then(response => {
            dispatch(setEvents(response.data.events))
        })
}


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


export const addEvent = (event) => dispatch => {
    axios
        .post(`${baseURL}/events/scheduling`, event)
        .then(response => {
            dispatch(getEvents())
        })
}