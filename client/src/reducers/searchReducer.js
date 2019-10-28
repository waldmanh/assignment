import { SEARCH_TEXT } from '../actions/types';

const initialState = {
    results: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_TEXT:
        return{
        ...state,
        results:action.payload
        }    
        default:
        return state
    }
}
