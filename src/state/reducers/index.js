// import auth from './auth';
import contact_modals from './contact_modals';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    contact_modals: contact_modals
});

export default rootReducer;