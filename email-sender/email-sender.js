// email-sender.js

const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email address
    pass: 'your-email-password'   // Replace with your email password or app-specific password
  }
});

// Set up email data
let mailOptions = {
  from: 'your-email@gmail.com',      // Replace with your email address
  to: 'recipient-email@gmail.com',   // Replace with the recipient's email address
  subject: 'Hello from Node.js',     // Subject line
  text: 'This is a test email sent from Node.js!', // Plain text body
  html: '<b>This is a test email sent from Node.js!</b>' // HTML body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
