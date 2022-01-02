// import React from 'react'
// import { BrowserRouter as Router , Route,Link, Switch } from "react-router-dom";
// import loop from './loginscreen.module.css'


// const LoginScreen = ()=>{
//     return(
//          <div className={loop.LoginScreen}>
//             <h2 className={loop.title}>Sign In</h2>
//            <form className={loop.form}>
//               <label>Email Address</label>
//               <input type='email' placeholder='Enter email'></input>
//               <label>password</label>
//               <input type='password' placeholder='password'></input>
//               <button type='submit' className={loop.btn1}>Sign In</button>
//              </form>
//              <Route>
//             <h3>New Customer ?<Link to="/signup">Register</Link></h3> 
//             </Route>
         
//          </div>
         
// )
// }
// export default LoginScreen;


import axios from "axios";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"; // eslint-disable-line
import { useHistory } from "react-router-dom";
import '../CSS/login.css'

export default function Login() {
  const [username1, setUsername] = useState(" ");
  const [password1, setPassword] = useState(" ");
  const history = useHistory();
  const incorrectCredentials = useRef(null);
  

  const LoginUser = () => {
    //Hitting the Login api using axios by sending the useremail and password to authenticate
    axios
      .post("/login", { username: username1, password: password1 })
      .then((result) => {
        console.log("Successfully Logged In\n", result);
        incorrectCredentials.current.innerText = " ";
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        incorrectCredentials.current.innerText =
          "Incorrect Login Credentials.. Please try again";
      });
  };
  // Show password feature
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    
    <div className="login">
      <br />
      <br />
      <br />
      <br />
      <p
        ref={incorrectCredentials}
        style={{ textAlign: "center", color: "red" }}
      ></p>
      <div className="Container">
        <br />
        <h1>SIGN IN</h1>
        <label className="Label" htmlFor="useremail">
          <b>Email Addresss</b>
        </label>
        <br />
        <input
          className={["credentials", "login-input"].join(" ")}
          id="useremail"
          name="useremail"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label className="Label" htmlFor="password">
          <b>Password</b>
        </label>
        <br />
        <input
          // this is used to give multiple classnames to a component
          className={["credentials", "login-input"].join(" ")}
          placeholder="Enter Password"
          id="password"
          name="password"
          type={passwordShown ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <div id="show-password">
          <input
            id="checkbox"
            type="checkbox"
            onClick={togglePasswordVisiblity}
          />
          <b> Show Password</b>
          <br />
        </div>
        <button className="submit" type="submit" onClick={LoginUser}>
          Submit
          <br />
        </button>
        <br />
        <br />
        <br />
        <div className="signup">
          <b>New Customer ? </b>
          <b>
            <Link to="/signup">Register</Link>
          </b>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
