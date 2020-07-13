const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map ((u) => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map ((u) => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return  {...state, currentPage: action.page};
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.count}
        default:
            return state;
    }
}

export default usersReducer;
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUserCountAC = (count) => ({type: SET_TOTAL_USER_COUNT, count});