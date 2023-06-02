import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Readable } from 'node:stream';
import { stripe } from '../../../utils/stripe';
import rexmit_mongo_client_promise from '../../../lib/rexmit_mongo_client_promise'

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false
  }
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const relevantEvents = new Set([
  'product.created',
  'product.updated',
  'price.created',
  'price.updated',
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted'
]);

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret =
      process.env.STRIPE_WEBHOOK_SECRET_LIVE ??
      process.env.STRIPE_WEBHOOK_SECRET;
    let event: Stripe.Event;

    try {
      if (!sig || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err: any) {
      console.log(`❌ Error message: ${err.message}`);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (relevantEvents.has(event.type)) {
      try {
        switch (event.type) {
          case 'product.created':
          case 'product.updated':
            //await upsertProductRecord(event.data.object as Stripe.Product);
            break;
          case 'price.created':
          case 'price.updated':
            //await upsertPriceRecord(event.data.object as Stripe.Price);
            break;
          case 'customer.subscription.created':
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
            //const subscription = event.data.object as Stripe.Subscription;
            /*await manageSubscriptionStatusChange(
              subscription.id,
              subscription.customer as string,
              event.type === 'customer.subscription.created'
            );*/
            break;
          case 'checkout.session.completed':
            const checkoutSession = event.data
              .object as Stripe.Checkout.Session;
            /*if (checkoutSession.mode === 'subscription') {
              const subscriptionId = checkoutSession.subscription;
              await manageSubscriptionStatusChange(
                subscriptionId as string,
                checkoutSession.customer as string,
                true
              );
            }*/
            if (checkoutSession.mode === 'payment') {
              let rexmit_mongo_client = await rexmit_mongo_client_promise;
              let db = rexmit_mongo_client.db("rexmit");
              let collection = db.collection("guilds");
              const filter = { id: checkoutSession.metadata.customer_id };
              const document_with_id = await collection.findOne(filter);
              let _id = "";
              let name = "";
              let expiration = "";
              if (document_with_id != null) {
                _id = document_with_id["_id"].toString();
                name = document_with_id["name"].toString();
                expiration = document_with_id["expiration"].toString();
                if (is_reserved(expiration)) {
                  let expiration_date = new Date(expiration);
                  expiration_date.setUTCMonth(expiration_date.getUTCMonth() + 1);
                  let update = { "$set": { expiration: expiration_date.toISOString() } };
                  let document_modify_result = await collection.findOneAndUpdate(filter, update);
                } else {
                  let expiration_date = new Date();
                  expiration_date.setUTCMonth(expiration_date.getUTCMonth() + 1);
                  let update = { "$set": { expiration: expiration_date.toISOString() } };
                  let document_modify_result = await collection.findOneAndUpdate(filter, update);
                }
              }
            }
            break;
          default:
            throw new Error('Unhandled relevant event!');
        }
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .send('Webhook error: "Webhook handler failed. View logs."');
      }
    }

    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

function is_reserved(iso_date_string: string): boolean {
  return new Date(iso_date_string) > new Date()
}

export default webhookHandler;
