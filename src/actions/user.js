// import axios from 'axios';
import { routes } from '../containers/Router';
import { push } from 'connected-react-router';

const storeUser = (user) => ({
    type: "STORE_USER",
    payload: { user }
})

export const signUp = user => dispatch => {
    // try {
    //     const data = {
    //         'name': user.name,
    //         'email': user.email,
    //         'password': user.password,
    //         'photo': user.photo
    //     }

    //     axios.post(
    //         // `colocar a url aqui`,
    //         data
    //     ).then(
    //         response => {
    //             window.localStorage.setItem('token', response.data.token)
    //             dispatch(storeUser(response.data.user))
    //             dispatch(push(routes.home))
    //         }
    //     )
    // } catch (err) {
    //     console.log(err)
    // }
}