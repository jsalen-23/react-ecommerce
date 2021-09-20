import { Wrapper, Link, Title } from './styles';

const PROFILE_IMG =
  'https://pbs.twimg.com/profile_images/1339420099913134081/aKyJWnDK_400x400.jpg';

const Header = () => {
  return (
    <Wrapper>
      <Link to='/user'>
        <img src={PROFILE_IMG} alt='Profile Picture' />
      </Link>
      <Title>Salen Store</Title>
    </Wrapper>
  );
};

export default Header;
