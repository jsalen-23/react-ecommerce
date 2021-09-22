import Layout from '../Layout/index';
import { Wrapper, Message } from './styles';
import { MdError } from 'react-icons/md';

const Error = () => {
  return (
    <Layout title='Error'>
      <Wrapper>
        <MdError size='68' />
        <Message>Something went wrong. Please reload.</Message>
      </Wrapper>
    </Layout>
  );
};

export default Error;
