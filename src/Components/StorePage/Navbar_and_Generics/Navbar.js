import { Container, Navbar, Nav, Button, Badge } from "react-bootstrap";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../StoreContext/Cart-Context";
import AuthContext from '../../Auth/AuthContext/Auth-context';
// import {useHistory} from 'react-router-dom';
import'./Navbar.css';


function NavBar(props) {

  // const history = useHistory();
  const cartCtx = useContext(CartContext);

  const authCtx=useContext(AuthContext);

  const logOutHandler=()=>{
    authCtx.logout();
    cartCtx.purchase();
  }

  let totalItemsInCart = cartCtx.items.length;
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
        <Button
          variant="primary"
          className="text-center"
          onClick={props.onOpen}
          style={{marginLeft:'10px'}}
        >
          Your Cart
          <Badge bg="secondary" style={{ marginLeft: "5px" }}>
            {totalItemsInCart}
          </Badge>
        </Button>
      </Container>
    </Navbar>
  );
}
export default NavBar;
