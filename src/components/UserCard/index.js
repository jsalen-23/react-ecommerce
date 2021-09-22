import { Card, CardBody, Picture } from './styles';

const PROFILE_IMG =
  'https://pbs.twimg.com/profile_images/1339420099913134081/aKyJWnDK_400x400.jpg';

const UserCard = () => {
  return (
    <Card>
      <Picture>
        <img src={PROFILE_IMG} alt='Profile Picture' />
      </Picture>
      <CardBody>
        <h2>Joseph Salen</h2>
        <p>Caracas, Venezuela</p>
      </CardBody>
    </Card>
  );
};

export default UserCard;
