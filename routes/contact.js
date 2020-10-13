var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
// the forward slash represents the home page
//we don't have '/about' instead of '/' because we are using its own routes files. This only applies if you are specifying inside an index.js file  
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });// render will basically display the jade file
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mongo.hardy@gmail.com',
            pass: 'magicMike#'
        }
    });
    var mailOption = {
        from: 'Sujoy Dutta <mike.gellar@gmail.com>',
        to: 'milke.gellar@gmail.com',
        subject: 'Website Submission',
        // text: `You have a new submission with the following details...
        // // Name: ${req.body.name}
        // // Email: ${req.body.email}
        // // Message: ${req.body.message} `,
        // // html: `<p>You have got a new submission with the following details...
        // //         </p><ul>
        // //             <li>Name: ${req.body.name}</li>
        // //             <li>Email: ${req.body.email}</li>
        // //             <li>Message: ${req.body.message}</li>
        // //             </ul>`
        text: 'You have a submission with the following details... Name: '+req.body.name +'Email: '+req.body.email +'Message: '+req.body.message,
    // HTML Version
        html: '<p>You got a website submission with the following details...</p><ul><li>Name: <b>'+req.body.name+'</b></li><li>Email: <b>'+req.body.email+'</b></li><li>Message: <b>'+req.body.message+'</b></li></ul>'
    };

    transporter.sendMail(mailOption, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        } else{
            console.log('Message Sent: ' + info.response);
            res.redirect('/');
        }
    });
}); 

module.exports = router;
