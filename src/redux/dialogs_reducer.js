const UPDATE_ANSWER_MESSAGE = "UPDATE_ANSWER_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Dimych",
            avatar: "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
            savedTemplate: "",
            messages: [{id: 1, text: "Hi"}]
        },
        {
            id: 2,
            name: "Andrey",
            avatar: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",
            savedTemplate: "",
            messages: [{id: 2, text: "HW R U?"}]
        },
        {
            id: 3,
            name: "Viktor",
            avatar: "https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg",
            savedTemplate: "",
            messages: [{id: 3, text: "Yo"}]
        },
        {
            id: 4,
            name: "Valera",
            avatar: "https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600",
            savedTemplate: "",
            messages: [{id: 4, text: "WU?"}]
        },
        {
            id: 5,
            name: "Sveta",
            avatar: "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
            savedTemplate: "",
            messages: [{id: 5, text: "Good morning"}]
        },
        {
            id: 6,
            name: "Sasha",
            avatar: "https://archilab.online/images/1/123.jpg",
            savedTemplate: "",
            messages: [{id: 6, text: "Hey"}]
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        dialogs: [...state.dialogs]
    };
    let dialog = stateCopy.dialogs.find((el) => el.id === action.id);
    switch (action.type) {
        case UPDATE_ANSWER_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.map (d => {
                    return d.id === action.userId ? {...d, savedTemplate: action.newText} : d;
                })
            }
        case SEND_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.map (d => {
                    if (d.id === action.userId) {
                        return {
                            ...d,
                            messages: [...d.messages, {id: 7, text: d.savedTemplate}],
                            savedTemplate: ''
                        }
                    }
                    return d;
                })
            }
        default:
            return state;
    }
};

export default dialogsReducer;
export const updateAnswerMessage = (userId, newText) => ({
    type: UPDATE_ANSWER_MESSAGE, userId, newText
});
export const sendMessageC = (userId) => ({type: SEND_MESSAGE, userId});