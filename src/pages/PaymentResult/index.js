import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button';

import { Wrapper } from './styles';

const Success = () => {
  const { orderID } = useParams();
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <>
      <img src='' alt='Order Completed' />
      <p>Joseph Salen, your order is being proccesed.</p>
      <p>{`Order ID #${orderID}`}</p>
      <p>Please, check your email for more details.</p>
    </>
  );
};

const Fail = () => {
  return (
    <>
      <img src='' alt='Order failed' />
      <p>
        Your order could <strong>not</strong> be completed.
      </p>
    </>
  );
};
const PaymentResult = () => {
  const { orderID } = useParams();

  return (
    <Wrapper>
      {orderID ? <Success /> : <Fail />}
      <Button size='md'>
        <Link to='/'>Home</Link>
      </Button>
    </Wrapper>
  );
};

export default PaymentResult;
