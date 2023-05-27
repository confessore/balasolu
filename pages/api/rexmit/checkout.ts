import { NextApiHandler } from 'next';
import { stripe } from '../../../utils/stripe';
import { getURL } from '../../../utils/helpers';

const CreateCheckoutSession: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { price_id, customer_id, quantity = 1, metadata = {} } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        metadata: { customer_id },
        line_items: [
          {
            price: price_id,
            quantity
          }
        ],
        mode: 'payment',
        allow_promotion_codes: true,
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`
      });

      return res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default CreateCheckoutSession;