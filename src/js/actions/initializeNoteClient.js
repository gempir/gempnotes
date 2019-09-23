import initializeClient from "../gapi/initializeClient";
import setLoading from "./setLoading";

export default function () {
    return function (dispatch) {
        dispatch(setLoading(true));
        return initializeClient(dispatch).then(() => dispatch(setLoading(false)));
    };
}
