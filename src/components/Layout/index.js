import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children, title }) => {
  return (
    <Fragment>
      <Helmet>{title && <title>{title} | Salen-Store</title>}</Helmet>
      {children}
    </Fragment>
  );
};

export default Layout;
