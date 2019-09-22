import updateLoginStatus from "./updateLoginStatus";


const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

export default function () {
    return function (dispatch, getState) {
        return new Promise((resolve, reject) => {
            gapi.load('client:auth2', () => {
                gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES
                }).then(() => {
                    gapi.auth2.getAuthInstance().isSignedIn.listen((status) => dispatch(updateLoginStatus(status)));
                    dispatch(updateLoginStatus(gapi.auth2.getAuthInstance().isSignedIn.get()));
                    resolve();
                }, (error) => {
                    reject(error);
                });
            });
        });
    };
}
