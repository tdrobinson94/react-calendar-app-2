import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL } from '../../actions/auth';
import { LOGOUT_SUCCESS } from '../../actions/auth';

const initState = {
    TOKEN: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case SIGNUP_FAIL:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default: 
            return state;
    }
}

export default authReducer