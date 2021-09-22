import { useContext } from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';

import { AppContext } from '../../context/AppContext';
import Error from '../../components/Error';

const Home = () => {
  const { products, loading, error } = useContext(AppContext);

  if (error) return <Error />;
  return (
    <Layout title='Home'>
      <FilterBar />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      )}
    </Layout>
  );
};

export default Home;
