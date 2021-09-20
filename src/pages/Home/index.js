import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';

const Home = () => {
  return (
    <Layout title='Home'>
      <SearchBar />
      {[1, 2, 3].map((item) => (
        <ProductCard key={item} />
      ))}
    </Layout>
  );
};

export default Home;
