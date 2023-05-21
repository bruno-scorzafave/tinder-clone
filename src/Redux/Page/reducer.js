import PageActionTypes from "./action-types";

const initialState = {
    currentPage: 'Cards',
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PageActionTypes.CHAT:
            return { ...state, currentPage: 'Chat'}
        case PageActionTypes.CARDS:
            return { ...state, currentPage: 'Cards'}
        case PageActionTypes.USER:
            return { ...state, currentPage: 'User'}
        default:
            return state;
    }
};

export default pageReducer;
