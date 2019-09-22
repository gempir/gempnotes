export default (state, action) => {
    switch (action.type) {
        case "SET_IS_LOGGED_IN":
            return { ...state, isLoggedIn: action.isLoggedIn };
        case "SET_NOTES":
            return { ...state, notes: action.notes };
        case "SET_LOADING":
            return { ...state, loading: action.loading };
        case "SET_SELECTED_NOTE":
            return { ...state, selectedNote: action.selectedNote };
        default:
            return { ...state };
    }
};