import {AuthApi, ProfileApi} from "../api/api";
import {toggleIsFetcing as profileToggleIsFetching, setUserProfile} from "./profile_reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}});

export const Authorize = () => {
    return (dispatch) => {
        AuthApi.Authorize()
            .then(response => {
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login));
                    dispatch(profileToggleIsFetching(true));
                    return ProfileApi.getProfile(id);
                }
            })
            .then(response => {
                dispatch(setUserProfile(response));
                dispatch(profileToggleIsFetching(false));
            });
    }
}