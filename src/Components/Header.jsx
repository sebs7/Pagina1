import React from "react";
import {Navbar,Nav,Form, FormControl, Button} from 'react-bootstrap';



function Header(){
    return(
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Vincent van Gogh</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Arte</Nav.Link>
        <Nav.Link href="#features">Historia</Nav.Link>
        <Nav.Link href="#contacto">Contacto</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    );
}
export default Header;