const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'kanojiyashashank2004@gmail.com', 
      pass: 'pabf osvv fqkv llla', 
    },
  });

  const mailOptions = {
    from: 'kanojiyashashank2004@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };