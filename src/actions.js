import { CHANGE_SEARCH_FIELD} from './constains';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})