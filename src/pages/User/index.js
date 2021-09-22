import { useState } from 'react';
import Layout from '../../components/Layout';
import UserCard from '../../components/UserCard';
import UserInfo from '../../components/UserInfo';
import UserHistory from '../../components/UserHistory';

import { BtnWrapper, Button } from './styles';

const User = () => {
  const [show, setShow] = useState(false);

  return (
    <Layout title='My account'>
      <h1>Profile</h1>
      <UserCard />
      <BtnWrapper>
        <Button onClick={() => setShow(false)} active={!show}>
          Info
        </Button>
        <Button onClick={() => setShow(true)} active={show}>
          History
        </Button>
      </BtnWrapper>
      {show ? <UserHistory /> : <UserInfo />}
    </Layout>
  );
};

export default User;
