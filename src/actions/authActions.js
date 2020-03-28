import axios from 'axios';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL } from './auth';

const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    const token = getState().auth.token

    axios.get('https://react-calendar-backend-api.herokuapp.com/user/:id', )
}