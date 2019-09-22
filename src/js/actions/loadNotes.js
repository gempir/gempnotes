import setNotes from "./setNotes";
import getMessage from "../gapi/getMessage";

export default function () {
    return function (dispatch, getState) {
        return new Promise((resolve, reject) => {
            gapi.client.gmail.users.messages.list({
                'userId': 'me',
                'q': 'label:notes'
            }).then(async function(response) {
                var messages = response.result.messages;

                const notes = [];
                
                for (const message of messages) {
                    notes.push(await getMessage(message.id));
                }

                dispatch(setNotes(notes));
            });
        });
    };
}
