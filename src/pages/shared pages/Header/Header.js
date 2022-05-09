import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Furniture Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#inventory">Inventory</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to="/manage">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addItem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/myItems">
                    My Items
                  </Nav.Link>
                </>
              )}

              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="btn"
                  style={{ backgroundColor: "transparent", color: "white" }}
                >
                  Sign out
                </button>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
