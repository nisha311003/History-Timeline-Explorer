import React, { useState } from 'react'
import './Signup.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
class signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Uname: "",
            email: "",
            password: "",
            errors: {
                email: "",
                password: "",
            },
        };
        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const{Uname, email, password, errors} = this.state;
    // Check if there are no errors
    if (errors.email === '' && errors.password === '') {
      // Perform further actions, like submitting the form
      console.log('Email:', email);
      console.log('Password:', password);
        fetch("http://localhost:5000/register",{
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Uname,
                email,
                password
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);

        });
        }
    }
    handleValidation(e){
        const { name, value } = e.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case 'email':
        errors.email =
          value.length === 0
            ? 'Email is required'
            : !/\S+@\S+\.\S+/.test(value)
            ? 'Email is invalid'
            : '';
        break;
      case 'password':
        errors.password =
          value.length === 0 ? 'Password is required' : '';
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errors: errors

    })
}

render(){
    const {Uname, email, password, errors} = this.state;
  return (
    <div className='signup'>
         <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <div className="input-box">
                <input type="text" placeholder='Username'
                name="Uname"
                value={Uname}
                onChange={this.handleValidation} 
                required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder='Email'
                name="email"
                value={email} 
                onChange={this.handleValidation} 
                required/>
                {errors.email.length >0 && (
                    <span style={{color: 'rgba(186, 10, 1, 0.81)'}}>{errors.email}</span>
                )}
                
                <MdEmail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password'
                name="password"
                value={password}
                onChange={this.handleValidation} 
                required/>
                {errors.password.length>0 && (
                    <span style={{color: 'rgba(186, 10, 1, 0.81)'}}>{errors.password}</span>
                )}
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Sign Up</button>
        </form> 
      
    </div>
  );
}
}

export default signup
