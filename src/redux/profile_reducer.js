const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState ={
    avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
    posts: [
        {id: 1, message: "Hi, HW R U?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30},
        {id: 3, message: "Bla bla bla", likesCount: 30},
        {id: 4, message: "Da da", likesCount: 30}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export default profileReducer;
export const addPostC = () => ({type: ADD_POST});
export const updateNewPostText = (newText) => ({type: UPDATE_NEW_POST_TEXT,
    newText: newText});