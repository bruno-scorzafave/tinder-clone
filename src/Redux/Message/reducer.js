import MessagesActionTypes from "./action-types";

const initialState = {
    messages: [],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MessagesActionTypes.SEND:
            return { ...state, messages: [ ...state.messages, ...action.payload ] }
        default:
            return state;
    }
};

export default messageReducer;