import Contact_Modals from '../models/contact_modals';

export const ADD_CONTACT_MESSAGE = 'ADD_CONTACT_MESSAGE'
export const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'

export const addContactMessage = () => {
  return async dispatch => {
    const payload = await Contact_Modals.addContactMessage();
    dispatch({type: ADD_CONTACT_MESSAGE, payload});
  };
};

export const addSubscriber = () => {
  return async dispatch => {
    const payload = await Contact_Modals.addSubscriber();
    dispatch({type: ADD_SUBSCRIBER, payload});
  };
};