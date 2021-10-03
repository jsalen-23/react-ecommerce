import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';

import { Wrapper, Description, Title, Label } from './styles';

const Paypal = () => {
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
    <Wrapper>
      <Description>
        <Title>Your total amount is $ {total.toFixed(2)}</Title>
        <Label>Please, select your payment method:</Label>
      </Description>
      <PayPalButton
        amount={total.toFixed(2)}
        options={paypalOptions}
        style={paypalStyles}
        onCancel={() => console.log('order canceled')}
        onSuccess={() => console.log('order completed')}
      />
    </Wrapper>
  );
};

export default Paypal;
