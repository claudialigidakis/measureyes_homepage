import {
  ADD_CONTACT_MESSAGE,
  ADD_SUBSCRIBER
} from '../actions/contact_modals';

let initialState = {
  contact_success: false,
  subscribe_success: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT_MESSAGE:
      return { ...state, contact_success: action.payload };
    case ADD_SUBSCRIBER:
      return { ...state, subscribe_success: action.payload };
    default:
      return state;
  }
};