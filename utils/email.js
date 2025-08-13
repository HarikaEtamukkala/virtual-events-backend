import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const mailer = nodemailer.createTransport({
  streamTransport: true,
  newline: 'unix',
  buffer: true,
});
export async function sendEmail(to, subject, text) {
  console.log(`Sending email to ${to} with subject "${subject}" and text "${text}"`);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    const info = await mailer.sendMail(mailOptions);
    console.log('Email sent:', info);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

   