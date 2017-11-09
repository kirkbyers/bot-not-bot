const nodemailer = require('nodemailer');

async function createTransport() {
  try {
    const transport = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    return transport;
  } catch (err) {
    console.log(`Error creating transport: ${err}`);
    return { error: err };
  }
}

module.exports = {
  createTransport,
};
