import {
    GET_ALL_LEARNING_PATH, GET_ALL_LEARNING_PATH_BY_DOMAIN
} from '../actions/types';

export const initState = {
    learningPaths: [],
    learningPathLoading: true
};

export default function globalReducer(state = initState, action) {
    switch (action.type) {
        case GET_ALL_LEARNING_PATH:
            return {
                ...state,
                learningPaths: action.payload,
                learningPathLoading: false
            }
        case GET_ALL_LEARNING_PATH_BY_DOMAIN:
            return {
                ...state,
                learningPaths: action.payload,
                learningPathLoading: false
            }
        default:
            return state;
    }
}