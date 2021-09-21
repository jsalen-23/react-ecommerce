import { useContext } from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';

import { AppContext } from '../../context/AppContext';

const Home = () => {
  const { products, loading, error } = useContext(AppContext);

  if (error) return <h2>Something went wrong. Please reload.</h2>;
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
