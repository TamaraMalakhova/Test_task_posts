import { postsAPI, userAPI } from "../api/api";

const SET_DATA = 'mainReducer/SET_DATA';
const FILTER_POSTS = 'mainReducer/FILTER_POSTS';


let initialState = {
    posts: [],
    users: [],
    filtredPosts: []
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_DATA:
            let posts = action.posts.map(p => ({
                ...p,
                authorName: getUserById(p.userId, action.users).name
            }))
            return {
                ...state,
                users: action.users,
                posts: posts,
                filtredPosts: posts
            };

        case FILTER_POSTS:
            return {
                ...state,
                filtredPosts: state.posts.filter(item => checkWordStart(item.authorName, action.searchText))
            };

        default:
            return state;
    }
}

const setDataAC = (users, posts) => ({ type: SET_DATA, posts, users });
export const filterPostsAC = (searchText = "") => ({ type: FILTER_POSTS, searchText });

export const setData = () => (dispatch) => {
    Promise.all([userAPI.getUsers(), postsAPI.getPosts()])
        .then(
            responses => {
                dispatch(setDataAC(responses[0], responses[1]));
            }
        )
}

const getUserById = (id, users) => {
    return users.find(u => u.id === id);
}

const checkWordStart = (word, startingValue) => {
    return word.toLowerCase().startsWith(startingValue.toLowerCase());
}


