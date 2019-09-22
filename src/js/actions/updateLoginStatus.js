import loadNotes from "./loadNotes";

export default (isLoggedIn) => (dispatch) => {
    dispatch({
        type: 'SET_IS_LOGGED_IN',
        isLoggedIn: isLoggedIn
    });
    
    if (isLoggedIn) {
        dispatch(loadNotes());
    }
}