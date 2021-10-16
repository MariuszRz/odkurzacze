// import types from './types';

const INITIAL_STATE = {
    name: null,
    auth: null,
    login: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.items;
        case "SET_LOGOUT":
            return {
                name: null,
                auth: null,
                login: false,
            };
        default:
            return state;
    }
};

export default loginReducer;
