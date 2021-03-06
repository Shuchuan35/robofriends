import { CHANGE_SEARCH_FIELD } from './constains';

const initialState = {
    searchInput: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchInput: action.payload});
        default:
            return state;
    }
}