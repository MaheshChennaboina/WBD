import React from 'react'
import { BrowserRouter as Router , Route,Link, Switch } from "react-router-dom";
import loop from './loginscreen.module.css'


const LoginScreen = ()=>{
    return(
         <div className={loop.LoginScreen}>
            <h2 className={loop.title}>Sign In</h2>
           <form className={loop.form}>
              <label>Email Address</label>
              <input type='email' placeholder='Enter email'></input>
              <label>password</label>
              <input type='password' placeholder='password'></input>
              <button type='submit' className={loop.btn1}>Sign In</button>
             </form>
             <Route>
            <h3>New Customer ?<Link to="/signup">Register</Link></h3> 
            </Route>
         
         </div>
         
)
}
export default LoginScreen;
