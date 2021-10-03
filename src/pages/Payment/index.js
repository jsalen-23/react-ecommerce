import Layout from '../../components/Layout';
import Paypal from '../../components/Paypal';

import { Wrapper } from './styles';
const Payment = () => {
  return (
    <Layout title='Payment'>
      <Wrapper>
        <Paypal />
      </Wrapper>
    </Layout>
  );
};

export default Payment;
