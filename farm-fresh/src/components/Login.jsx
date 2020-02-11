import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosAuth";
import styled from "styled-components";
import Load from "./Loader";
import { Link } from 'react-router-dom';
import "../App.css";
const FormWrap = styled.div`
background-color: rgba(0,0,0,.3);
color: white;
text-shadow: 2px 2px 2px #111;
width: 20em;
margin: 0 auto;
padding: 3%;
height: 35em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h4 {
    font-size: 2.2em;
    text-align: center;
    font-family: 'Gelasio', serif;
    
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        margin: 1.5em 0em;
        height: 2em;
        font-size: 1.3em;
        border-radius 8px;
        font-family: 'Gelasio', serif;
    }
}
button {
    font-size: 1.3em;
    padding: 3%;
    border-radius: 8px;
    font-family: 'Gelasio', serif;
    
    @media(min-width: 800px) {
        padding: 2%;
    }
}
.to-register {
  margin-top: 1em;
}
`;
const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState({
    isLoading: false
  });
  const [validation, setValidation] = useState({
    usernameVal: false,
    passwordVal: false
  });
  const login = e => {
    e.preventDefault();
    if (
      validation.usernameVal ||
      validation.passwordVal ||
      credentials.username === "" ||
      credentials.password === ""
    ) {
      setValidation({ ...validation, usernameVal: true, passwordVal: true });
    } else {
      axiosWithAuth()
        .post(
          "https://farm-fresh-produce-api.herokuapp.com/api/auth/login",
          credentials
        )
        .then(res => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userName);
          console.log(res);
          console.log(res.data.token);
          if (res.data.is_farmer === "y") {
            props.history.push("/farmer-dashboard");
          } else {
            props.history.push("/products");
          }
        })
        .catch(err => {
          console.log(err);
        });
      setLoading({ ...loading, isLoading: true });
      setTimeout(() => {
        setLoading({ ...loading, isLoading: false });
      }, 2000);
      console.log(credentials);
    }
  };
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    console.log(credentials);
  };
  const validateUserName = e => {
    if (credentials.username === "") {
      setValidation({ ...validation, usernameVal: true });
    } else {
      setValidation({ ...validation, usernameVal: false });
    }
  };
  const validatePassword = e => {
    if (credentials.password === "") {
      setValidation({ ...validation, passwordVal: true });
    } else {
      setValidation({ ...validation, passwordVal: false });
    }
  };
  return (
    <div className="pasture">
      {loading.isLoading ? (
        <FormWrap>
          <h4>Logging in...</h4> <Load />{" "}
        </FormWrap>
      ) : (
        <FormWrap>
          <h4>Welcome! Please log in to proceed.</h4>
          <form onSubmit={login}>
            <input
              name="username"
              value={credentials.username}
              type="text"
              placeholder="Username"
              onChange={handleChange}
              onBlur={validateUserName}
            />
            {validation.usernameVal ? <p>You need a username!</p> : ""}
            <input
              name="password"
              value={credentials.password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={validatePassword}
            />
            {validation.passwordVal ? <p>You need a password!</p> : ""}
            <button type="submit">Log In!</button>
          </form>
          <Link className='to-register' to='/register-user'><button>Register</button></Link>
        </FormWrap>
      )}
    </div>
  );
};
export default Login;