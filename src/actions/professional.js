import axios from 'axios';
/* import { routes } from '../containers/Router';
import { push } from 'connected-react-router'; */

const baseURL = "https://wngygx9wlh.execute-api.us-east-1.amazonaws.com/v1"

export const getLocals = () => (dispatch) => {
  axios
        .get(`${baseURL}/locations`)
    .then(response => {
      dispatch(setLocations(response.data.locations))
    })
}

export const getServices = () => (dispatch) => {
  axios.get(`${baseURL}/services`)
  .then(response => {
    dispatch(setServices(response.data.services))
  })
}

export const setProfessionalData = (data) => ({
  type: "SET_PROFESSIONAL_DATA",
  payload: {
    data
  }
})

export const setServices = (services) => ({
  type: "SET_SERVICES",
  payload: {
    services
  }
})

export const setLocations = (locations) => ({
  type: "SET_LOCATIONS",
  payload: {
    locations
  }
})

