export default () => (dispatch, getState) => {
    const newDarkTheme = !getState().darkTheme;
    dispatch({
        type: 'SET_DARK_THEME',
        darkTheme: newDarkTheme
    });

    localStorage.setItem("darkTheme", newDarkTheme);
}