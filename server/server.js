const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// POST endpoint for sending emails
app.post('/send-email', (req, res) => {
  const { name, email, phoneNumber, query } = req.body;

  // Create a SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'axproperty.com', // Update with your SMTP server hostname
    port: 465, // Update with your SMTP server port
    secure: true, // Set to true if your SMTP server requires SSL/TLS
    auth: {
      user: 'support@axproperty.com', // Update with your email address
      pass: 'Pcf@290890' // Update with your email password
    }
  });

  // Construct email options
  const mailOptions = {
    from: 'support@axproperty.com', // Update with your email address
    to: 'syed.umairhusnain@axproperty.com', // Update with recipient email
    subject: 'New inquiry from your website',
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Query: ${query}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
