import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../Loading';
import ProductCard from '../ProductCard';

import { Wrapper } from './styles';

const ListOfProducts = () => {
  const { products, loading, error } = useContext(AppContext);

  if (error) return <Error />;

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Wrapper>
  );
};

export default ListOfProducts;
