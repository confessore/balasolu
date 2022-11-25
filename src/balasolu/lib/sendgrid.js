import { setApiKey, send } from '@sendgrid/mail'

setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY)

const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  export default sendgrid