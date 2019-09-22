export default (selectedNote) => (dispatch) => {
    dispatch({
        type: 'SET_SELECTED_NOTE',
        selectedNote: selectedNote
    });
}