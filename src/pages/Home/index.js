import { useContext } from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';

import { AppContext } from '../../context/AppContext';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Home = () => {
  const { products, loading, error, addToCart } = useContext(AppContext);

  if (error) return <Error />;

  const handleAdd = (product) => () => {
    addToCart(product);
  };

  return (
    <Layout title='Home'>
      <FilterBar />
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            handleAdd={handleAdd}
            product={product}
          />
        ))
      )}
    </Layout>
  );
};

export default Home;
