import { SET_LOCALE } from './actions';
import { SET_BACKGROUND_COLOR } from './actions';
import { Reducer } from 'react';
import { Action } from 'redux';

const commonReducer: Reducer<Record<string, any>, Action<any>> = (
    state: Record<string, any>,
    action: Record<string, any>
) => {
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
};

export default commonReducer;
