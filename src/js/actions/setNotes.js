export default (notes) => (dispatch) => {
    dispatch({
        type: 'SET_NOTES',
        notes: notes
    });
}