import loadNotes from "./loadNotes";

export default (isLoggedIn) => (dispatch) => {
    dispatch({
        type: 'SET_IS_LOGGED_IN',
        isLoggedIn: isLoggedIn
    });
    console.log("Login status: " + isLoggedIn);
    
    if (isLoggedIn) {
        dispatch(loadNotes());
    }
}