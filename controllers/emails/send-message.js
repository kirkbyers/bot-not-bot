const { createTestTransport } = require('./create-test-transport');
const { createTransport } = require('./create-transport');

async function sendMessage(to, subject, message) {
  const transporter = process.env.NODE_ENV !== 'development' ? await createTestTransport() : await createTransport();
  if (transporter.error) {
    return { error: transporter.error };
  }
  const mailOptions = {
    from: `"Kirk Byers" <${process.env.MAIL_ADDRESS || 'test@mail.co'}>`,
    to,
    subject,
    html: message,
  };
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.log(`Error sending email: ${err}`);
    return { error: err };
  }
}

module.exports = {
  sendMessage,
};
