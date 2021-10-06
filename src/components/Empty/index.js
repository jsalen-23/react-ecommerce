import { Wrapper } from './styles';

const Empty = ({ icon, title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <img src={icon} alt='Empty Cart' />
    </Wrapper>
  );
};

export default Empty;
