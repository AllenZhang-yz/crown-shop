import React from 'react';
import axios from 'axios';
import StripeCheckout, { Token } from 'react-stripe-checkout';

interface IStripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<IStripeCheckoutButtonProps> = ({
  price,
}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_8uGsR47SLcgZvlswb1iUp7zG00YyMusgQJ';
  const onToken = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => alert('Payment successful'))
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment');
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      alipay
      bitcoin
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
