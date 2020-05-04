import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

const storeUser = (user) => ({
    type: "STORE_USER",
    payload: { user }
})

const baseURL = "https://wngygx9wlh.execute-api.us-east-1.amazonaws.com/v1"

export const login = user => dispatch => {

    const data = {
        email: user.email,
        password: user.password
    }

    axios
        .post(`${baseURL}/login`, data)
        .then(response => {
            window.localStorage.setItem('token', response.data.token)
            dispatch(storeUser(response.data.user))
            dispatch(push(routes.home))
        })
}



export const signUp = user => dispatch => {
    try {
        const data = {
            'name': user.name,
            'email': user.email,
            'password': user.password,
            'address': user.address
        }

        axios.post(
            `${baseURL}/signup`,
            data
        ).then(
            response => {
                window.localStorage.setItem('token', response.data.token)
                dispatch(storeUser(response.data.user))
                dispatch(push(routes.home))
            }
        )
    } catch (err) {
        console.log(err)
    }
}