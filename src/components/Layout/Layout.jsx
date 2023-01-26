import { Container } from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;
