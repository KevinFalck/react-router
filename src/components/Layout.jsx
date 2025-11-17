import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <Container as="main" className="my-3">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
