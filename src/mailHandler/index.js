let api = require('./api');
exports.handler = async (event, context) => {

    console.log('v201008.1');
    
    let response = {
        statusCode: 200,
        isBase64Encoded: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: {
            message: 'success'
        }
    }

    try {

        

        if (event.path === "/mail") {
            await api.send(event.body);
        }

      

    }
    catch (error) {
        response.statusCode = 500;
        console.error(error);
        response.body = { message: error.message || error };
    }

    if (typeof (response.body) === 'object')
        response.body = JSON.stringify(response.body);
    else
        response.body = JSON.stringify({ message: response.body });

    return response;
};
