import Layout from '../../components/Layout';
import FilterBar from '../../components/FilterBar';
import ListOfProducts from '../../components/ListOfProducts';

const Home = () => {
  return (
    <Layout title='Home'>
      <FilterBar />
      <ListOfProducts />
    </Layout>
  );
};

export default Home;
