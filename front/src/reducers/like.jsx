import {
	ADDLIKE,
	REMOVELIKE
} from "../actions";

const initialState = [];

export const likeReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDLIKE:
			return [...state, action.payload.item];
		case REMOVELIKE:
			return state.filter(item => item.id !== action.payload.id);
		default:
			return state;
	}
};