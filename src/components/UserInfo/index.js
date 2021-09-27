import Button from '../Button';
import { MdEdit } from 'react-icons/md';
import { Wrapper, InfoCard, Label } from './styles';

const UserInfo = () => {
  return (
    <Wrapper>
      <InfoCard>
        <Label>Full name:</Label>
        <p>Joseph Salen</p>
      </InfoCard>
      <InfoCard>
        <Label>E-mail:</Label>
        <p>jsalen.91@gmail.com</p>
      </InfoCard>
      <InfoCard>
        <Label>Address:</Label>
        <p>23 de Enero, Monte Piedad</p>
      </InfoCard>
      <Button>
        Edit Info <MdEdit />
      </Button>
    </Wrapper>
  );
};

export default UserInfo;
