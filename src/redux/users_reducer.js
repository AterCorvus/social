const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: "I'm a boss", location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, followed: true, fullName: 'Sasha', status: 'Studying', location: {city: 'Moskov', country: 'Russia'} },
        {id: 3, followed: false, fullName: 'Andrew', status: "I'm happy!", location: {city: 'Boston', country: 'USA'} }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                })
            }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const  unfollowAC = (userId) =>({type: UNFOLLOW, userId});
