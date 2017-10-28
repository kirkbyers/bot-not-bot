const nodemailer = require('nodemailer');

async function createTransport() {
  const transport = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  return transport;
}

module.exports = {
  createTransport,
};
