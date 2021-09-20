import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

const Home = () => {
  return (
    <Layout title='Home'>
      {[1, 2, 3].map((item) => (
        <ProductCard key={item} />
      ))}
    </Layout>
  );
};

export default Home;
