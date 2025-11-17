import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="d-flex align-items-center justify-content-center" style={{ minHeight: "calc(100vh - 200px)" }}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default Layout;
