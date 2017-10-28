const nodemailer = require('nodemailer');

async function createTestTransport() {
  try {
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
  } catch (err) {
    console.log(`Error creating test transport: ${err}`);
    return { error: err };
  }
}

module.exports = {
  createTestTransport,
};
