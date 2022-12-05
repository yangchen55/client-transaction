import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useEffect , useState   } from 'react';

function Header() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    setUser(user);
  }, [])

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">Transaction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id?(
              <>
               <div className='nav-link fw-bolder text-warning'> {""} welcome back {user?.name}</div>


            
            <Link to="#" className='nav-link'>Logout</Link>
            </>
            ):(
           <>
            <Link to="/" className='nav-link'>Login</Link>
            <Link to="/register" className='nav-link'>Register</Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;