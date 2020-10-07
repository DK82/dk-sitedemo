let webClient = {};
let axios = require('axios');
//const audit = require('./audit');

let api = {

    send: async function (body) {



        await init();

        var queryUrl = `${process.env.API_URL}/mail/send`;

        await webClient.post(queryUrl, body, {
            headers: {
                'authorization': `Bearer ${process.env.API_KEY}`
            }
        })
            .then(function (response) {
                console.log('success api.send.post');
            })
            .catch(function (error) {
                console.error('error api.send.post', error);
                throw error.response.data.errors[0].message;
            });




    },





}

async function init() {

    webClient = await axios.create({
        baseURL: process.env.API_URL
    });



}


module.exports = api;