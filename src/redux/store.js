import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let store = {
    _subscriber: () => {
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    _state: {
        profilePage: {
            avatar: "https://store.playstation.com/store/api/chihiro/00_09_000/container/IL/en/999/EP0149-CUSA09988_00-AV00000000000001/1553560094000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
            posts: [
                {id: 1, message: "Hi, HW R U?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 30},
                {id: 3, message: "Bla bla bla", likesCount: 30},
                {id: 4, message: "Da da", likesCount: 30}
            ],
            newPostText: ""
        },
        dialogPage: {
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
        },
    },
    get state() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this.state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._subscriber(this);
    }
};

export default store;