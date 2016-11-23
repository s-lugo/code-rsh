import { COURSE } from '../actions/course.js';

const initialState = {
   id: "",
   name:"",
   difficulty:"",
   text:"",
};

function course(state = initialState, action){
    switch(action.type) {
        case COURSE.SELECT_COURSE:
            return Object.assign({}, action.course);
        case COURSE.RESET_COURSE:
            return initialState;
        case COURSE.FAVORITE_COURSE:
        case COURSE.UNFAVORITE_COURSE:
        default:
            return state;
    }
}

export default course;