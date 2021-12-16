import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom";
import styles from './signup.module.css'
import axios from 'axios'


const SignUp = ()=>{
    const [name ,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [conformPassword,setConformPassword]= useState("")
    const [message,setMessage] = useState("")
     const nameHandler = (event)=>{
        event.preventDefault();
        setName(event.target.value)
    }
    const emailHandler = (event)=>{
        event.preventDefault();
        setEmail(event.target.value)
    }
    const passwordHandler = (event)=>{
        event.preventDefault();
        setPassword(event.target.value)
    }
    const conformPasswordHandler = (event)=>{
        event.preventDefault();
        setConformPassword(event.target.value)
    }

    const formHandler = (event)=>{
        event.preventDefault();
        const obj = {
            "id":Math.random().toString(),
            "name": name,
            "Email": email,
            "password": password,
            "conformPassword": conformPassword
        }
        console.log(obj)
        const url = "http://localhost:3002/user_details";
        axios.post(url,obj)
        .then((response)=>{
          console.log(response.status)
          setMessage("sucessssfully Register!")
        })
       setName("")
       setPassword("");
       setConformPassword("")
       setEmail("")
    }

        return(
            <div className={styles.signup}>
                <h1>Sign Up</h1>
                <form className={styles.inside_form} onSubmit={formHandler}>
                    <label>Name</label>
                    <input type='text'name='name' placeholder="Enter name" onChange={nameHandler}/>
                    <label>Email Address</label>
                    <input tyoe='email' name='email' placeholder="Enter email" onChange={emailHandler}/>
                    <label>PassWord</label>
                    <input type='password' placeholder="Enter password"onChange={passwordHandler}/>
                    <label>Confirm Password</label>
                    <input type='password' placeholder="Confirm Password" onChange={conformPasswordHandler}/>
                    <button type="submit" className={styles.btn}>Register</button>
                </form>
                {message}
                <h3 className="bottom">Have an Account?<Link to="/login" className="link">login</Link></h3>
            </div>
        );
}
export default SignUp 
