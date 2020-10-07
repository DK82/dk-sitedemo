
var aws = require("aws-sdk");
let schemas = require('./schemas');

let lambda = new aws.Lambda();

let api = {

    send: async function (body) {

        let _body = JSON.parse(body);

        //validate payload
        var valid = schemas.send.validate(_body);
        if (valid.error) {
            console.log(valid.error);
            throw valid.error.message;
        }

        // sendgrid
        var params = {
            FunctionName: process.env.FUNC_SENDGRID,
            InvocationType: 'RequestResponse',
            LogType: 'Tail',
            Payload: body
        };

        let result = await lambda.invoke(params)
            .promise()
            .catch(function (err) {
                throw err.message;
            });

        let parsedResult = JSON.parse(result.Payload);
        if (parsedResult.statusCode == 200)
            return result;

        //mailgun
        params = {
            FunctionName: process.env.FUNC_MAILGUN,
            InvocationType: 'RequestResponse',
            LogType: 'Tail',
            Payload: body
        };

        result = await lambda.invoke(params)
            .promise()
            .catch(function (err) {
                throw err.message;
            });

        parsedResult = JSON.parse(result.Payload);
        if (parsedResult.statusCode == 200)
            return result;

        else
            throw 'email send not complete';






    },





}




module.exports = api;