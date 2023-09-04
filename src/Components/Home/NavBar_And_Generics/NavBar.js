import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import AuthContext from '../../Auth/AuthContext/Auth-context';
import { useContext } from "react";
// import {useHistory} from 'react-router-dom';
import CartContext from '../../StorePage/StoreContext/Cart-Context';

function NavBar() {

  // const history=useHistory();
  const authCtx=useContext(AuthContext);
  const cartCtx=useContext(CartContext);

  const logOutHandler=()=>{
    authCtx.logout();
    cartCtx.purchase();
    // history.replace('/auth');
  }
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Nav className="me-auto display-6">
          <NavLink className="ok" to="/home">
            Home
          </NavLink>
          <NavLink className="ok" to="/store">
            Store
          </NavLink>
          <NavLink className="ok" to="/aboutpage">
            About
          </NavLink>
          <NavLink className="contact" to="/contactuspage">
            contact us
          </NavLink>
        </Nav>
        <NavLink className="profile" to="/profile">
          Profile
        </NavLink>
        <Button variant="danger" size="md" onClick={logOutHandler}>
          Log Out
        </Button>
      </Container>
    </Navbar>
  );
}
export default NavBar;
