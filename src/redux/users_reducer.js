const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map((u) => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                })
            };
        case UNFOLLOW:
            return {...state,
                users: state.users.map((u) => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return  {...state, currentPage: action.page};
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.count};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {...state,
                followInProgress: action.isFetching ?
            [...state.followInProgress, action.userId] :
                    state.followInProgress.filter((id) => id != action.userId)
            };
        default:
            return state;
    }
}

export default usersReducer;
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId});