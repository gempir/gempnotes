export default () => {

    let darkTheme = localStorage.getItem('darkTheme');
    console.log(darkTheme);
    if (darkTheme === null) {
        darkTheme = true;
    } else {
        darkTheme = darkTheme == "true";
    }

    return {
        notes: [],
        selectedNote: null,
        loading: false,
        isLoggedIn: false,
        darkTheme: darkTheme,
    }
}