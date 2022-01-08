// import axios from "axios";
// import React, { useState, useRef } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom"; // eslint-disable-line
// import { useHistory } from "react-router-dom";
// import '../CSS/login.css'

// export default function Login() {
//   const [username1, setUsername] = useState(" ");
//   const [password1, setPassword] = useState(" ");
//   const history = useHistory();
//   const incorrectCredentials = useRef(null);
  

//   const LoginUser = () => {
//     //Hitting the Login api using axios by sending the useremail and password to authenticate
//     axios
//       .post("/login", { username: username1, password: password1 })
//       .then((result) => {
//         console.log("Successfully Logged In\n", result);
//         incorrectCredentials.current.innerText = " ";
//         history.push("/");
//       })
//       .catch((err) => {
//         console.log(err);
//         incorrectCredentials.current.innerText =
//           "Incorrect Login Credentials.. Please try again";
//       });
//   };
//   // Show password feature
//   const [passwordShown, setPasswordShown] = useState(false);
//   const togglePasswordVisiblity = () => {
//     setPasswordShown(passwordShown ? false : true);
//   };
//   return (
    
//     <div className="login">
//       <br />
//       <br />
//       <br />
//       <br />
//       <p
//         ref={incorrectCredentials}
//         style={{ textAlign: "center", color: "red" }}
//       ></p>
//       <div className="Container">
//         <br />
//         <h1>SIGN IN</h1>
//         <label className="Label" htmlFor="useremail">
//           <b>Email Addresss</b>
//         </label>
//         <br />
//         <input
//           className={["credentials", "login-input"].join(" ")}
//           id="useremail"
//           name="useremail"
//           type="text"
//           placeholder="Enter Email"
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <br />
//         <label className="Label" htmlFor="password">
//           <b>Password</b>
//         </label>
//         <br />
//         <input
//           // this is used to give multiple classnames to a component
//           className={["credentials", "login-input"].join(" ")}
//           placeholder="Enter Password"
//           id="password"
//           name="password"
//           type={passwordShown ? "text" : "password"}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <div id="show-password">
//           <input
//             id="checkbox"
//             type="checkbox"
//             onClick={togglePasswordVisiblity}
//           />
//           <b> Show Password</b>
//           <br />
//         </div>
//         <button className="submit" type="submit" onClick={LoginUser}>
//           Submit
//           <br />
//         </button>
//         <br />
//         <br />
//         <br />
//         <div className="signup">
//           <b>New Customer ? </b>
//           <b>
//             <Link to="/signup">Register</Link>
//           </b>
//         </div>
//         <br />
//         <br />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen