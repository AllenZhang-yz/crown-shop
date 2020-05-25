import React from 'react';
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
    console.log(token);
    alert('Payment successful');
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
