import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom';
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    handleSubmit(e){
        e.preventDefault();
        const {Uname, email, password} = this.state;
        // fetch("http://localhost:5000/login",{
        //     method: "POST",
        //     crossDomain: true,
        //     headers:{
        //         "Content-Type":"application/json",
        //         Accept: "application/json",
        //     },
        //     body:JSON.stringify({
        //         Uname,
        //         email,
        //         password
        //     })
        // })
        // .then((res)=> res.json())
        // .then((data)=>{
        //     console.log(data);
        // });
    }


render(){
    const {email, password} = this.state;
  return (
    <div className='wrapper'>
        <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" name="email" placeholder='Email' value={email} onChange={this.handleChange} required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name="password" placeholder='Password'value={password} onChange={this.handleChange} required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account?<a href="#"><Link to='/signup'>Register</Link></a></p>
            </div>
        </form>

    </div>
  )
}
}

export default LoginForm

