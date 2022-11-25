import { NextApiRequest, NextApiResponse } from 'next';

const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.SENDGRID_KEY);

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const content = {
    to: ['steven.confessore@gmail.com'],
    from: 'noreply@balasolu.com',
    subject: subject,
    text: description,
    html: `<div>
    <h1>Name: ${name}</h1>
    <h1>E-mail: ${email}</h1>
    <p>${description}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(204).end();
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send({ message: error });
  }
}