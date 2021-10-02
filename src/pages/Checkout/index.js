import Layout from '../../components/Layout';
import UserForm from '../../components/UserForm';

import { Wrapper } from './styles';

const Checkout = () => {
  return (
    <Layout title='Checkout'>
      <Wrapper>
        <UserForm />
      </Wrapper>
    </Layout>
  );
};

export default Checkout;
