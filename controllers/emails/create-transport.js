const nodemailer = require('nodemailer');

async function createTransport() {
  try {
    const transport = await nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
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
