const nodemailer = require("nodemailer");
module.exports = {
    sendMail: async (receiver, content, subject) => {
        // Step 1
        let transporter = nodemailer.createTransport({
            host: 'smtp.yandex.com',
            port: 465,
            auth: {
                user: process.env.EMAIL_YANDEX, // TODO: your gmail account
                pass: process.env.PASSWORD_YANDEX //" // TODO: your gmail password
            },
            secure: true
        });
        // Step 2
        let mailOptions = {
            from: process.env.EMAIL_YANDEX, // TODO: email sender
            to: receiver, // TODO: email receiver
            subject: subject,
            text: content
        };
        console.log(mailOptions);
        // Step 3
        return new Promise((resolve) => {
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    throw err;
                }
                resolve(data);
            });
        }).then((resolve) => { return resolve; })
    }
};
