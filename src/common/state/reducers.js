import { SET_LOCALE } from './actions';
import { SET_BACKGROUND_COLOR } from './actions';

export default function commonReducer(state, action) {
    switch (action.type) {
        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload,
            };
        case SET_BACKGROUND_COLOR: {
            return {
                ...state,
                backgroundColor: action.payload,
            };
        }

        default:
            return state;
    }
}
