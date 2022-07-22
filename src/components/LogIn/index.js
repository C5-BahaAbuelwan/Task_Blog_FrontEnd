// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/reducer/auth";

import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handelLogin = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?username=${userName}`)
      .then((result) => {
        console.log(result.data[0].email);
        if (result.data[0].email === emailInput) {
          dispatch(
            loginAction({
              Name: result.data[0].name,
              userName: result.data[0].username,
              email: result.data[0].email,
              id: result.data[0].id,
            })
          );
          setIsLoggedIn(true);
          navigate("/");
        } else {
          setMessage("Email is Wrong");
        }
      })
      .catch((err) => {
        setMessage("User Name is Wrong");
      });
  };

  return (
    <div className="login">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className="form">
        <h3>Login Here</h3>

        <label for="username">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="username"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        />

        <label for="password">User Name</label>
        <input
          type="text"
          placeholder="User Name"
          id="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        {message === "" ? <></> : <label for="username">{message}</label>}
        <button onClick={handelLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Login;
