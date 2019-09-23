import updateLoginStatus from "../actions/updateLoginStatus";

export default function (dispatch) {
    const CLIENT_ID = 'ODQ4NDY4MTQ0MzA2LXZjMjBra2Y1a2V0bmg3NDVycjI1ZmpvaDcyMmJnZHNqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t';
    const API_KEY = 'QUl6YVN5RFh5MTJhcFpuTVYtcEtTNGdSMnBud3lvaXNvSGxBSGVN'; // API key is restricted to my domain to avoid any abuse
    const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
    const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

    return new Promise((resolve, reject) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: window.atob(API_KEY),
                clientId: window.atob(CLIENT_ID),
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
}