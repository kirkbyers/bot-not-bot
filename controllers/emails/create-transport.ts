import * as nodemailer from 'nodemailer';

async function createTransport(): Promise<nodemailer.Transporter | { error: any }> {
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

export {
  createTransport,
};
