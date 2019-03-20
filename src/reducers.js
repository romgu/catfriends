import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
	searchField: ''
}

export const searchCats = (state=initialState, action={}) => {
	switch(action.tye) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
		default: 
			return state;
	}
}