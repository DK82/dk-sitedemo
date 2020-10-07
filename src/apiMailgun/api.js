//const audit = require('./audit');

let api = {

  send: async function (body) {

    var mailgun = require('mailgun-js')({ apiKey: process.env.API_KEY, domain: process.env.API_DOMAIN });
   
    await mailgun.messages()
      .send(body)
      .then(function (res) {
        console.log('success api.send.post');
      })
      .catch(function (err) {
        console.error('error api.send.post', err);
        throw err.message;
      });

    


  },





}




module.exports = api;