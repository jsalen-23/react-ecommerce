import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';

const Payment = () => {
  const PP_ID = process.env.PP_CLIENT_ID;
  const {
    state: {
      cart: { total },
    },
  } = useContext(AppContext);
  const paypalOptions = {
    clientId: PP_ID,
    intent: 'capture',
    currency: 'USD',
  };
  const paypalStyles = {
    layout: 'vertical',
    shape: 'rect',
    label: 'pay',
  };

  return (
    <PayPalButton
      amount={total.toFixed(2)}
      options={paypalOptions}
      style={paypalStyles}
      onCancel={() => console.log('order canceled')}
      onSuccess={() => console.log('order completed')}
    />
  );
};

export default Payment;
