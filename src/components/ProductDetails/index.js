import { useParams } from 'react-router-dom';
import useGetSingleProduct from '../../hooks/useGetSingleProduct';
import Error from '../Error';
import Loading from '../Loading';
import ProductCard from '../ProductCard';

import { Wrapper } from './styles';

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, loading, error] = useGetSingleProduct(productID);

  if (error) return <Error />;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <ProductCard details product={product} />
        </Wrapper>
      )}
    </>
  );
};

export default ProductDetails;
