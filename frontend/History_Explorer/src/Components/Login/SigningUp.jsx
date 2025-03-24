import React from 'react'
import './Signup.css';
import 'boxicons'
class signup extends React.Component {
    constructor(props) {
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
    handleSubmit(e) {
        e.preventDefault();
        const { Uname, email, password, errors } = this.state;
        // Check if there are no errors
        if (errors.email === '' && errors.password === '') {
            // Perform further actions, like submitting the form
            console.log('Email:', email);
            console.log('Password:', password);
            fetch("http://localhost:5000/register", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    Uname,
                    email,
                    password
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);

                });
        }
    }
    handleValidation(e) {
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

    render() {
        const { Uname, email, password, errors } = this.state;
        return (
            <div className='body'>
                <div className='form_container'>
                    <span className='animation2'></span>
                    <div className='form signing' >
                        <form onSubmit={this.handleSubmit}>
                            <h1>Sign Up</h1>
                            <div className="input">
                                <input type="text"
                                    name="Uname"
                                    value={Uname}
                                    onChange={this.handleValidation}
                                    required />
                                    <label for="text">Username</label>
                                 <box-icon name='user' type='solid' color='#ffffff' ></box-icon>
                            </div>
                            <div className="input">
                                <input type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleValidation}
                                    required />
                                    <label for="text">Email</label>
                                {errors.email.length > 0 && (
                                    <span style={{ color: 'rgba(186, 10, 1, 0.81)' }}>{errors.email}</span>
                                )}

                                <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                            </div>
                            <div className="input">
                                <input type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleValidation}
                                    required />
                                    <label for="password">Password</label>
                                {errors.password.length > 0 && (
                                    <span style={{ color: 'rgba(186, 10, 1, 0.81)' }}>{errors.password}</span>
                                )}
                                <box-icon name='lock-alt' type='solid' flip='horizontal' color='#ffffff' ></box-icon>
                            </div>
                            <div className="remember-forgot">
                                <label><input type="checkbox" />Remember me</label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className='info-text signing'>
                        <h2>Welcome Back!</h2>
                        <p>Hello!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default signup
