import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import FilterBar from '../../components/FilterBar';

const Home = () => {
  return (
    <Layout title='Home'>
      <FilterBar />
      {[1, 2, 3].map((item) => (
        <ProductCard key={item} />
      ))}
    </Layout>
  );
};

export default Home;
