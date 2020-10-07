let api = require('./api');
let temp = require('./templates');
exports.handler = async (event, context) => {

    console.log('v201008.1');

    let response = {
        statusCode: 200,
        body: {
            message: 'success'
        }
    }

    try {

        if (!process.env.API_URL)
            throw 'missing variable/value <API_URL>. Contact your administrator.'
        if (!process.env.API_KEY)
            throw 'missing variable/value <API_KEY>. Contact your administrator.'

        let model = temp.send(event.from, event.to, event.subject, event.text, event.cc, event.bcc);
        await api.send(model);
    }
    catch (err) {
        response.statusCode = 500;
        response.body = { message: err.message || err };
    }




    return response;
};
