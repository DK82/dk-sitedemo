let templates = {
    send: function (from, to, subject, text, cc, bcc) {
        let response = {
            from: from,
            to: to.join(','),
            subject: subject,
            text: text
        }
        if (cc)
            response.cc = cc.join(',');
        if (bcc)
            response.bcc = bcc.join(',');

        return response;
    }

}

module.exports = templates;