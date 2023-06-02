import { useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import Button from './Button';
import { postData } from '../../utils/helpers';
import { getStripe } from '../../utils/stripe-client';

import { Price, ProductWithPrice } from 'types';


type BillingInterval = 'year' | 'month';

export default function Pricing(props) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');

  const handleCheckout = async () => {

    try {
      const { sessionId } = await postData({
        url: '/api/rexmit/checkout',
        data: { 
          price_id: "price_1NEMdMLbQoCnScgf6LHq7S3y", 
          customer_id: props.guild_id 
        }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
    }
  };


  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">

        <Button
          variant="slim"
          type="button"
          disabled={false}
          loading={false}
          onClick={() => handleCheckout()}
          className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
        >
          Purchase
        </Button>

      </div>
    </section>
  );
}