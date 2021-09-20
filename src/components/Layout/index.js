import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { Wrapper } from './styles';

const Layout = ({ children, title }) => {
  return (
    <Wrapper>
      <Helmet>{title && <title>{title} | Salen-Store</title>}</Helmet>
      {children}
    </Wrapper>
  );
};

export default Layout;
