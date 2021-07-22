import * as actionTypes from "../actions/actionTypes";

const initialState = {
    posts: [],
    loading: false,
    hasErrors: false
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_POSTS:
            return {...state, loading: true};
        case actionTypes.GET_POSTS_SUCCESS:
            return {posts: action.payload, loading: false, hasErrors: false}
            case actionTypes.GET_POSTS_FAILURE:
                return {...state, loading: false, hasErrors: true}
        default:
            return state;
    }
}

export default postsReducer;

