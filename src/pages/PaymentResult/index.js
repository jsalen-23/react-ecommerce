import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

import okIcon from '../../statics/images/ok.png';
import failIcon from '../../statics/images/no-data.png';
import { Wrapper } from './styles';

const Success = () => {
  const { orderID } = useParams();
  const {
    state: { buyer },
  } = useContext(AppContext);

  return (
    <>
      <img src={okIcon} alt='Order Completed' />
      <p>
        <strong>{`${buyer[0].name} ${buyer[0].lastName}`}</strong>, your order
        is being proccesed.
      </p>
      <p>
        Order ID <strong>{`#${orderID}`}</strong>
      </p>
      <p>Please, check your email for more details.</p>
    </>
  );
};

const Fail = () => {
  return (
    <>
      <img src={failIcon} alt='Order failed' />
      <p>
        Your order could <strong>not</strong> be completed.
      </p>
    </>
  );
};
const PaymentResult = () => {
  const { orderID } = useParams();

  return (
    <Layout>
      <Wrapper>
        {orderID ? <Success /> : <Fail />}
        <Button size='md'>
          <Link to='/'>Home</Link>
        </Button>
      </Wrapper>
    </Layout>
  );
};

export default PaymentResult;
