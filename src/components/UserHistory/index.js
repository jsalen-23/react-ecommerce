import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import DetailCard from '../DetailCard';
import { Wrapper } from './styles';

const UserHistory = () => {
  const {
    state: { history },
  } = useContext(AppContext);

  return (
    <Wrapper>
      {history.map((product) => (
        <DetailCard key={product.id} {...product} />
      ))}
    </Wrapper>
  );
};

export default UserHistory;
