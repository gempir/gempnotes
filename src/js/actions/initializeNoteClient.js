import initializeClient from "../gapi/initializeClient";

export default function () {
    return function (dispatch) {
        return initializeClient(dispatch);
    };
}
