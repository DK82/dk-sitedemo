let api = require('./api');
exports.handler = async (event, context) => {

    console.log('v201008.1');
    
    let response = {
        statusCode: 200,
        body: {
            message: 'success'
        }
    }

    try {

        if (!process.env.API_DOMAIN)
            throw 'missing variable/value <API_DOMAIN>. Contact your administrator.'
        if (!process.env.API_KEY)
            throw 'missing variable/value <API_KEY>. Contact your administrator.'


        let temp = require('./templates')
            .send(event.from, event.to, event.subject, event.text, event.cc, event.bcc);
        let statusCode = await api.send(temp);


    }
    catch (err) {

        response.statusCode = 500;
        response.body = { message: err.message || err };
    }




    return response;
};
