import loadState from "../storage/loadState";

export default () => {

    const persistedState = loadState();

    return {
        notes: [],
        selectedNote: null,
        loading: false,
        isLoggedIn: false,
        darkTheme: true,
        ...persistedState,
    }
}