import {
    GET_ALL_COURSE_BY_DOMAIN, GET_ALL_COURSE,
    GET_COURSE_DETAIL
} from '../actions/types'

const initState = {
    courses: [],
    courseLoading: true,
    courseDetail: {},
    courseDetailLoading: {}
}

const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_COURSE_BY_DOMAIN:
            return {
                ...state,
                courses: action.payload,
                courseLoading: false
            }
        case GET_ALL_COURSE:
            return {
                ...state,
                courses: action.payload,
                courseLoading: false
            }
        case GET_COURSE_DETAIL: 
            return {
                ...state, 
                courseDetail: action.payload,
                courseDetailLoading: false
            }
        default:
            return state;
    }
}

export default courseReducer