'use server';

import { createTransport } from 'nodemailer';

import { type EmailSchemaInput, emailSchema } from '@/lib/utils/email.schema';

const host = process.env.SMTP_HOST;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const mailTo = process.env.MAIL_TO;
const smtpMail = process.env.SMTP_MAIL;

const transporter = createTransport({
  host,
  port: 587,
  secure: false,
  auth: {
    user,
    pass,
  },
});

export async function sendMail(data: EmailSchemaInput) {
  const parsedData = emailSchema.safeParse(data);

  if (!parsedData.success)
    return {
      success: false,
      message: parsedData.error.flatten().formErrors,
      status: 424,
    };
  const { name, email, message } = parsedData.data;

  await transporter.sendMail({
    from: `${name} <${smtpMail ?? ''}>`,
    to: mailTo,
    subject: `Message from ${email}`,
    html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>`,
  });

  return {
    success: true,
    message: 'Email successfully sent!',
    status: 200,
  };
}
