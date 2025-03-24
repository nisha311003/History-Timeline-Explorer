import React from 'react';
import './LoginForm.css';
//import logo from './images/mountain.jpg';
import 'boxicons';
//import 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
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
        const {email, password} = this.state;
        fetch("http://localhost:5000/login",{
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log("inside loginform",data);
            if (data) {
                console.log("Logged In");
                this.props.onLogin(); // Call onLogin passed from props
            }
        });

    }

render(){
        const { email, password } = this.state;
        return (
            <div className='body'>
                <div className='form_container'>

                    <span className='animation'></span>

                    <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Login</h1>
                            <div className="input">
                                <input type="text" name="email" value={email} onChange={this.handleChange} required />
                                <label for="text">Email</label>
                                <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                            </div>
                            <div className="input">
                                <input type="password" name="password" value={password} onChange={this.handleChange} required />
                                <label for="password">Password</label>
                                <box-icon name='lock-alt' type='solid' flip='horizontal' color='#ffffff' ></box-icon>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />Remember me</label>
                                <a href="#"><Link to='/forgot-password'>Forgot password?</Link></a>
                            </div>
                            <button type="submit">Login</button>
                            <div className="register">
                                <p>Don't have an account?<a href="#"><Link to='/signup'>Register</Link></a></p>
                            </div>
                        </form>
                    </div>
                    <div className='info-text login'>
                        <h2>Welcome Back!</h2>
                        <p>Hello!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm

