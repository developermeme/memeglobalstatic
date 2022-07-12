import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../assets/MEME.png";
import Navbarback from "../assets/Navbarback.png";

export default function Header() {
  return (
    <>
      <div>
        <Navbar
          bg="light"
          expand="xl"
          style={{ width: "100%", position: "absolute" }}
        >
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} className="NavbarLogo" alt="Logo" />
              {/* <h1>MeMeGlobal</h1> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <Nav.Link href="#Platforms">PLATFORMS</Nav.Link>
                <Nav.Link href="#Brands">OUR BRANDS</Nav.Link>
                <Nav.Link href="#Coperations">OUR CORPARATES</Nav.Link>
                <Nav.Link href="#Investors">OUR ANGEL INVESTERS</Nav.Link>
                <Nav.Link href="#Contact">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div><img src={Navbarback} style={{width:"100%",height:"auto"}}/></div>
    </>
  );
}
