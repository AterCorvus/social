import {AuthorizeThunk as Authorize} from "./auth_reducer";

const INITIALIZE = "INITIALIZE";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;
const initialize = () => ({type: INITIALIZE});

export const initializeThunk = () => (dispatch) => {
    dispatch(Authorize()).then(() => {
        dispatch(initialize());
    })
}