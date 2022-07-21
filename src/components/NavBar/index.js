import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import {logoutAction} from "../../redux/reducer/auth"
import { useNavigate } from "react-router-dom";
import AddPost from "../addPost";
import { useState } from "react";
import "./style.css"
function NavBar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [addPost,setAddPost]=useState(false)
  const { isLoggedIn, name } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      name: state.auth.name,
    };
  });
  return (
    <Navbar bg="dark" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand onClick={()=>{
          navigate("/")
        }}>BLOG APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
          navigate("/")
        }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
          navigate("/posts")
        }}>Posts</Nav.Link>
            <Nav.Link onClick={()=>{
          navigate("/users")
        }}>Users</Nav.Link>

            
          </Nav>
          {isLoggedIn ? (
            <>
            <Nav.Link onClick={()=>{
              
              navigate("/info")
              
            }}>welcome: {name}</Nav.Link>
            <Button className="signout" onClick={()=>{
              dispatch(logoutAction(),
              navigate("/login")
              )
            }} variant="link">SignOut</Button>
            </>
          ) : (
            <Button className="signout" onClick={()=>{
              dispatch(logoutAction(),
              navigate("/login")
              )
            }} variant="link">Login</Button>
            
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;
