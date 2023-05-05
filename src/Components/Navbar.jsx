import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import tofs from "../Components/image/tofs.png";


const Nave = () => {
  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container className=''>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto float-end w-100">
            <Nav.Link href="#link" className='h-25 w-100 d-flex justify-content-end' >
              <input type='text'  />
            
            </Nav.Link>
            <Nav.Link href="#link" className='text-end w-100' >
                Rama Fall <br />
                Admin
            </Nav.Link>
            <Nav.Link href="#link" className='ms-auto'>
              <img src={tofs} className='photo ' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Nave;