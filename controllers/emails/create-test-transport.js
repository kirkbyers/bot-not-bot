const nodemailer = require('nodemailer');

async function createTestTransport() {
  const account = await nodemailer.createTestAccount();
  const transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });
  return transporter;
}

module.exports = {
  createTestTransport,
};
