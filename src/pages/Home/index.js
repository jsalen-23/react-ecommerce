import { useContext } from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';

import { AppContext } from '../../context/AppContext';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Home = () => {
  const { products, loading, error } = useContext(AppContext);

  if (error) return <Error />;
  return (
    <Layout title='Home'>
      <FilterBar />
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </Layout>
  );
};

export default Home;
