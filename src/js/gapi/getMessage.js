export default function getMessage(messageId, userId = "me") {
    return new Promise((resolve, reject) => {
        var request = gapi.client.gmail.users.messages.get({
            'userId': userId,
            'id': messageId
        });
        request.execute((response) => {
            resolve(response.result);
        });
    });
}