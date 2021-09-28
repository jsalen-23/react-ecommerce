import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import HistoryCard from '../HistoryCard';
import { Wrapper } from './styles';

const UserHistory = () => {
  const {
    state: { history },
  } = useContext(AppContext);

  return (
    <Wrapper>
      {history.map((product) => (
        <HistoryCard key={product.id} {...product} />
      ))}
    </Wrapper>
  );
};

export default UserHistory;
