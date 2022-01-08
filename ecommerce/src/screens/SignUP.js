// // import React from 'react'
// // import {useState} from "react"
// // import {Link} from "react-router-dom";
// // import styles from './signup.module.css'
// // import axios from 'axios'


// // const SignUp = ()=>{
// //     const [name ,setName] = useState("");
// //     const [email,setEmail] = useState("");
// //     const [password,setPassword] = useState("")
// //     const [conformPassword,setConformPassword]= useState("")
// //     const [message,setMessage] = useState("")
// //      const nameHandler = (event)=>{
// //         event.preventDefault();
// //         setName(event.target.value)
// //     }
// //     const emailHandler = (event)=>{
// //         event.preventDefault();
// //         setEmail(event.target.value)
// //     }
// //     const passwordHandler = (event)=>{
// //         event.preventDefault();
// //         setPassword(event.target.value)
// //     }
// //     const conformPasswordHandler = (event)=>{
// //         event.preventDefault();
// //         setConformPassword(event.target.value)
// //     }

// //     const formHandler = (event)=>{
// //         event.preventDefault();
// //         const obj = {
// //             "id":Math.random().toString(),
// //             "name": name,
// //             "Email": email,
// //             "password": password,
// //             "conformPassword": conformPassword
// //         }
// //         console.log(obj)
// //         const url = "http://localhost:3002/user_details";
// //         axios.post(url,obj)
// //         .then((response)=>{
// //           console.log(response.status)
// //           setMessage("sucessssfully Register!")
// //         })
// //        setName("")
// //        setPassword("");
// //        setConformPassword("")
// //        setEmail("")
// //     }

// //         return(
// //             <div className={styles.signup}>
// //                 <h1>Sign Up</h1>
// //                 <form className={styles.inside_form} onSubmit={formHandler}>
// //                     <label>Name</label>
// //                     <input type='text'name='name' placeholder="Enter name" onChange={nameHandler}/>
// //                     <label>Email Address</label>
// //                     <input tyoe='email' name='email' placeholder="Enter email" onChange={emailHandler}/>
// //                     <label>PassWord</label>
// //                     <input type='password' placeholder="Enter password"onChange={passwordHandler}/>
// //                     <label>Confirm Password</label>
// //                     <input type='password' placeholder="Confirm Password" onChange={conformPasswordHandler}/>
// //                 </form>
// //                 {message}
// //                 <h3 className="bottom">Have an Account?<Link to="/login" className="link">login</Link></h3>
// //             </div>
// //         );
// // }
// // export default SignUp 

// import React, { useState, useRef } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom"; // eslint-disable-line
// import { useHistory } from "react-router-dom";
// import "../CSS/signup.css"

// function Register() {
//   const history = useHistory();
//   //Declaring React Hooks to store the user data and post it to the JSON-Server.
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [useremail, setUseremail] = useState("");
//   const [mobile_number, setMobilenumber] = useState("");
//   const [userPassword, setPassword] = useState("");
//   // Hooks created for Show Password feature.
//   const [passwordShown, setPasswordShown] = useState(false);
//   const isUser = useRef(null);
//   // Show password function to toggle the password type from text to password.
//   const togglePasswordVisiblity = () => {
//     setPasswordShown(passwordShown ? false : true);
//   };
//   // Function declared to post the users details to the JSON-Server.
//   const registerUser = (event) => {
//     //Fetching the JSON-Server
//     fetch(`http://localhost:3000/users?q=${useremail}`)
//       .then((res) => res.json())
//       .then((json) => json[0].email)
//       .then((email) => {
//         //Checking whether User Already Exists
//         isUser.current.innerText =
//           "Email already in use. Please try again using another email id";
//       })
//       .catch((err) => {
//         isUser.current.innerText = " ";
//         const data = {
//           fulllName: firstname + " " + lastname,
//           email: useremail,
//           mobileNumber: mobile_number,
//           password: userPassword,
//           address: " ",
//           wishlist: [],
//           purchases: [],
//           cartItems: [],
//           reviews: [],
//           isLoggedIn: true,
//         };
//         fetch("http://localhost:3000/users", {
//           method: "POST", // or 'PUT'
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log("Success:", data);
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//         event.preventDefault();
//         history.push("/");
//       });
//   };
//   return (
//     <React.Fragment>
//       <div className="signup-form">
//         <div className="form-container">
//           <p ref={isUser} style={{ textAlign: "center", color: "red" }}></p>
//           <br />
//           <h1 style={{ textAlign: "center" }}>Sign Up</h1>
//           <div>
//             <label className="Label" htmlFor="fname">
//               <h1>Your Name</h1>
//             </label>
//             <br />
//             <input
//               className="input-field width-43"
//               type="text"
//               name="fname"
//               id="fname"
//               placeholder="First Name"
//               onChange={(e) => setFirstname(e.target.value)}
//               required
//             />
//             <input
//               className="input-field width-43"
//               type="text"
//               name="lname"
//               id="lname"
//               placeholder="Last Name"
//               onChange={(e) => setLastname(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="Label" htmlFor="email_id">
//               <h1>Email Id</h1>
//             </label>
//             {/* <br /> */}
//             <input
//               className="input-field width-90"
//               type="text"
//               name="email_id"
//               id="email_id"
//               placeholder="example@gmail.com"
//               onChange={(e) => setUseremail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="Label" htmlFor="mobile_number">
//               <h3>Mobile Number</h3>
//             </label>
//             {/* <br /> */}
//             <input
//               className="input-field width-90"
//               type="text"
//               name="mobile_number"
//               id="mobile_number"
//               placeholder="999999999"
//               onChange={(e) => setMobilenumber(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="Label" htmlFor="password">
//               <h3>Password</h3>
//             </label>
//             <input
//               className="input-field width-90"
//               placeholder="Password"
//               id="password"
//               name="password"
//               type={passwordShown ? "text" : "password"}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <br />
//           </div>
//           <div id="showpassword">
//             <input
//               id="checkbox"
//               type="checkbox"
//               onClick={togglePasswordVisiblity}
//             />
//             <b> Show Password</b>
//             <br />
//           </div>
//           <button
//             type="submit"
//             className="submit-register"
//             onClick={registerUser}
//           >
//             Register
//           </button>
//           <br />
//           <br />
//           <br />
//           <p style={{ textAlign: "center" }}>
//             <b>Existing User ? </b>
//             <Link to="/login">Sign in</Link>
//           </p>
//           <br />
//           <br />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
// export default Register;
