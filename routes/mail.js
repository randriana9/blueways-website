var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/send', function(req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rina0904@gmail.com',
            pass: 'Sondag22'
        }
    });

    var mailOptions = {
        from: '"' + req.body.email + '" <rina_0904@hotmail.com>',
        to: 'rina.andriana@outlook.com',
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('there was an error');
        } else {
            res.render('contactresponse');
        }
    })
})

module.exports = router;