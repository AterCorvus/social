import {AuthApi, ProfileApi} from "../api/api";
import {toggleIsFetcing as profileToggleIsFetching, setUserProfile} from "./profile_reducer";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_CAPTCHA_REQ = "TOGGLE_IS_CAPTCHA_REQ";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isCaptchaReq: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_CAPTCHA_REQ:
            return {
                ...state,
                isCaptchaReq: action.isCaptchaReq
            }
        default:
            return state;
    }
}

export default authReducer;
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}});
export const toggleIsCaptchaReq = (isCaptchaReq) => ({type: TOGGLE_IS_CAPTCHA_REQ, isCaptchaReq});

const Authorize = (dispatch) => {
    AuthApi.Authorize()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
                dispatch(profileToggleIsFetching(true));
                return ProfileApi.getProfile(id);
            }
        })
        .then(response => {
            dispatch(setUserProfile(response));
            dispatch(profileToggleIsFetching(false));
        });
}

export const AuthorizeThunk = () => {
    return (dispatch) => {
        Authorize(dispatch);
    }
}

export const Login = (email, password, rememberMe = 0, captcha) => {
    return (dispatch) => {
        AuthApi.Login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(toggleIsCaptchaReq(false));
                    return Authorize(dispatch);
                }
                else if(response.resultCode === 10) {
                    dispatch(toggleIsCaptchaReq(true));
                }
            })
    }
}

export const Logout = () => {
    return (dispatch) => {
        AuthApi.Logout()
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}