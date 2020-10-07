let templates = {
    send: function (from, to = [], subject, text, cc = [], bcc = []) {
        let model = {
            "personalizations": [
                {
                    "to": to.map(x => { return { email: x } }),
                    "subject": subject
                }
            ],
            "content": [
                {
                    "type": "text/plain",
                    "value": text
                }
            ],
            "from": {
                "email": from
            },
            "reply_to": {
                "email": from
            }
        }

        if (cc)
            model.personalizations.cc = cc.map(x => { return { email: x } });
        if (bcc)
            model.personalizations.bcc = bcc.map(x => { return { email: x } });

        return model;
    }
}

module.exports = templates;