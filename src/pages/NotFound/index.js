import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { notFound } from '../../statics/images';
import { Wrapper } from './styles';

const NotFound = () => {
  return (
    <Layout title='Page Not Found'>
      <Wrapper>
        <img src={notFound} alt='Error 404: Not Found' />
        <p>
          Looks like this page does <strong>not</strong> exist.
        </p>
        <Button size='md'>
          <Link to='/'>Home</Link>
        </Button>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;
