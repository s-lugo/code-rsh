
export const COURSE = {
    SELECT_COURSE: 'COURSE.SELECT_COURSE',
    RESET_COURSE: 'COURSE.RESET_COURSE',
    FAVORITE_COURSE: 'COURSE.FAVORITE_COURSE',
    UNFAVORITE_COURSE: 'COURSE.UNFAVORITE_COURSE',
}

export function selectCourse(course) {
    return { type: COURSE.SELECT_COURSE, course };
}

export function favoriteCourse(id) {
    return { type: COURSE.FAVORITE_COURSE, id };
}

export function unfavoriteCourse(id) {
    return { type: COURSE.UNFAVORITE_COURSE, id };
}

export function resetCourse() {
    return { type: COURSE.RESET_LANGUAGE, course: null };
}