import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {

  const navigate = useNavigate();

  const handleOwnerRegister = () => {
    navigate("/owner-add")
  }

  const handleOwnersList = () => {
    navigate("/owners")
  }

  const handleTenantRegister = () => {
    navigate("/tenant-add")
  }

  const handleCosignerRegister = () => {
    navigate("/cosigner-add")
  }
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Propietarios" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={handleOwnersList}>Listado de Propietarios</NavDropdown.Item>
              <NavDropdown.Item onClick={handleOwnerRegister}>
                Registro de Propietarios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Inquilinos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Listado de Inquilinos</NavDropdown.Item>
              <NavDropdown.Item onClick={handleTenantRegister}>
                Registro de Inquilinos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Codeudores" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Listado de Codeudores</NavDropdown.Item>
              <NavDropdown.Item onClick={handleCosignerRegister}>
                Registro de Codeudores
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
