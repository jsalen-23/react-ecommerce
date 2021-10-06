import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';

import { Wrapper, Description, Title, Label } from './styles';

const Paypal = () => {
  const history = useHistory();
  const PP_ID = process.env.PP_CLIENT_ID;
  const {
    state: {
      cart: { total },
    },
    clearCart,
  } = useContext(AppContext);
  const fixedAmount = total.toFixed(2);
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

  const success = (details, data) => {
    clearCart();
    history.push(`/checkout/payment/success/${data.orderID}`);
  };

  return (
    <Wrapper>
      <Description>
        <Title>Your total amount is $ {fixedAmount}</Title>
        <Label>Please, select your payment method:</Label>
      </Description>
      <PayPalButton
        amount={fixedAmount}
        options={paypalOptions}
        style={paypalStyles}
        onCancel={() => history.push('/checkout/payment/fail')}
        onSuccess={(details, data) => success(details, data)}
      />
    </Wrapper>
  );
};

export default Paypal;
