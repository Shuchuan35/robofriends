import { CHANGE_SEARCH_FIELD } from './constains';

const initialState = {
    search: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { search: action.payload});
        default:
            return state;
    }
}