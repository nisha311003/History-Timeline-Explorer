import React from 'react'
import './ForgotPassword.css';
import logo from './images/mountain.jpg';
import { FaUser} from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [resetToken, setResetToken] = useState('');
    const handleForgotPassword = async(e)=>{
        e.preventDefault();
        try{
           const response = await fetch('http://localhost:5000/forget',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });
            if(!response.ok){
                throw new Error('Failed to fetch reset token');
            }
            const data = await response.json();
            console.log(data);
            setMessage(data.message);
            if(data.resetToken){
                console.log("hii");
                console.log(data.resetToken)
                setResetToken(data.resetToken);
            }
            
        }catch(error){
            console.log("Error: ", error);
            //setMessage('An error occurred while processing your request');
        }
    }
  return (
    <div className='login' >
        
    <div className='wrapper' >
        <form onSubmit={handleForgotPassword}>
            <h1 style={{fontSize: '36px',textAlign: 'center'}}>Forgot Password</h1>
            <div className="input-box">
                <input type="text" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <FaUser className='icon'/>
            </div>
            
            <button type="submit">Send Reset Token</button><br></br>
            <div className="remember-forgot">
                <a href="#"><Link to='/reset-password'>Reset password</Link></a>
            </div>
            {message && <p style={{color: 'black', fontSize: 'large'}}>{message}</p>}
            
        </form>

    </div>
    </div>
  )
}

export default ForgotPassword