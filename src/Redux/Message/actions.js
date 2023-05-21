import MessagesActionTypes from "./action-types";

export const sendMessage = (payload) => ({
    type: MessagesActionTypes.SEND,
    payload
});