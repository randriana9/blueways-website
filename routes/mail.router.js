var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var config = require('../config/config');

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport(config.transportObj);

    var mailOptions = {
        from: '"' + req.body.email + '" <rina_0904@hotmail.com>',
        to: 'rina.andriana@outlook.com',
        subject: req.body.subject || "message from contact page",
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

router.post('/member', function(req, res, next) {
    var transporter = nodemailer.createTransport(config.transportObj);

    var info = "<h1> Info om nytt medlem </h1>" +
     "<ul> <li> Fornavn: " + req.body.firstname +
     "<li> Etternavn: " + req.body.lastname +
     "<li> Fødselsdato: " + req.body.birthday +
     "<li> Addresse: " + req.body.address +
     "<li> Poststed: " + req.body.city +
     "<li> Postnummer: " + req.body.zipcode +
     "<li> E-post: " + req.body.email +
     "<li> Mobil: " + req.body.mobile +
     "</ul>";



    var mailOptions = {
        from: '"' + req.body.email + '" <rina_0904@hotmail.com>',
        to: 'rina.andriana@outlook.com',
        subject: "Forespørsel: Nytt medlem - Blueways",
        html: info
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('there was an error');
        } else {
            res.render('member-response');
        }
    })
})

module.exports = router;