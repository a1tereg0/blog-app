const initialState = {
    posts: [],
    loading: false,
    hasErrors: false
};

const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default postsReducer;

