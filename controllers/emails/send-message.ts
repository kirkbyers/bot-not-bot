import { Transporter } from 'nodemailer';

import { createTransport } from './create-transport';

async function sendMessage(to: string, subject: string, message: string) {
  const transporter: any = await createTransport();
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

export {
  sendMessage,
};
