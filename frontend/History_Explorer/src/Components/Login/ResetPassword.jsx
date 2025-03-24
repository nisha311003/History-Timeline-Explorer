import React from 'react'
import './ResetPassword.css';
import logo from './images/mountain.jpg';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import {Link} from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [Newpassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/reset',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({email, token, Newpassword}),
            })
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
            })
        }catch(error){
            console.error('Error: ', error);
        }

    }
  return (
    <div className='login' style={{margin: '0',padding: '0',boxSizing: 'border-box'}}>
        <img src = {logo} style={{height:'100vh',width:'100vw',margin:'0',fontFamily:'Poppins',display:'flex',backgroundSize:'cover',backgroundPosition:'center'}} alt='mountain'/>
    <div className='wrapper' style={{background: 'transparent',
      border: '5px solid #ffffff33',
      boxShadow: '0 0 10px #00000033', marginTop: '-600px',marginLeft: '500px',width: '420px',justifyContent: 'center',alignItems: 'center',
      color: '#fff',
      borderRadius: '10px',
      padding: '30px 40px'}}>
        <form onSubmit={handleResetPassword}>
            <h1 style={{fontSize: '36px',textAlign: 'center'}}>Reset Password</h1>
            <div className="input-box">
                <input type="text" name="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" name="token" placeholder='Reset Token'value={token} onChange={(e)=>setToken(e.target.value)} required/>
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name="New password" placeholder='New Password'value={Newpassword} onChange={(e)=>setNewPassword(e.target.value)} required/>
                <FaLock className='icon'/>
            </div>
            
            <button type="submit">Reset Password</button>
            <div className="remember-forgot">
                <a href="#"><Link to='/login'>Move to Login Page</Link></a>
            </div>
            {message && <p>{message}</p>}
            
        </form>

    </div>
    </div>
  )
}

export default ResetPassword
