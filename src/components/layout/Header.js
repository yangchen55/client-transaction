import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/user/UserSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);

  const handleOnLogOut = () => {
    dispatch(logoutSuccess()) && navigate("/");
  };

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">Transaction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userInfo?._id ? (
              <>
                <div className="nav-link fw-bolder text-warning">
                  welcome back  ( {userInfo?.name} )
                </div>

                <Link to="/" className="nav-link" onClick={handleOnLogOut}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
