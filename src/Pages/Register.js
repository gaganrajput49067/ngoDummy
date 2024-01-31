import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import {useDispatch} from 'react-redux';
import { authSlice } from '../store/Auth';

const globalurl='http://localhost:8800';

const Register = () => {
  const dispatch=useDispatch();
  const { login } = authSlice.actions;
  const [activePanel, setActivePanel] = useState('login');
  const [details, setDetails] = useState({
    email: "",
    name:'',
    password: "",
    phoneno: "",
    cpassword:'',
  });
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const togglePanel = () => {
    setActivePanel((prevPanel) => (prevPanel === 'login' ? 'register' : 'login'));
    setDetails({
        email: "",
        password: "",
        phoneno: "",
        cpassword:'',
      })
    setError("")
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleValidation = () => {
    if (activePanel === 'register') {
      if (!validateEmail(details.email) && !validatePhone(details.phoneno)) {
        return "Invalid Email and Phone Number";
      } else if (!validateEmail(details.email)) {
        return "Invalid Email";
      } else if (!validatePhone(details.phoneno)) {
        return "Invalid Phone Number";
      } else if (!details.password || !details.cpassword) {
        return "Password and Confirm Password cannot be empty";
      } else if (details.password !== details.cpassword) {
        return "Password and Confirm Password do not match";
      }
    } else {
      return "";
    }
  };
  

  const handleRegisteration=()=>{
    const err = handleValidation();
    
    if (err && activePanel=='register') {
          setError(err)
        }
        else if(!err&&activePanel=='register') {
             const payload={
                name:details?.name,
                email:details?.email,
                password:details?.password,
                phone:details?.phoneno
             }
             const url=`${globalurl}`
            axios.post(`${url}/signup`,payload).then((res)=>{
              console.log(res?.data?.token)
               navigate('/')
            }).catch((err)=>{
                console.log(err)
            })
        }
        else if(activePanel=='login'){
            const payload={
                email:details?.email,
                password:details?.password,
                phone:details?.phoneno
             }
             const url=`${globalurl}`
            axios.post(`${url}/login`,payload).then((res)=>{
               console.log(res?.data?.token)
               const details=res?.data?.token
               dispatch(login(details));
               navigate('/')
            }).catch((err)=>{
                console.log(err)
            })
        }
      
    }

  return (
    <>
    <Navbar/>
    <div className="register">
      <div>
        {activePanel === 'login' && (
          <div>
            <h2 style={{color:'green'}}>LOGIN</h2>
            <input type="text" name="email" placeholder="Email or Phone" onChange={handleChange} />
            <input type="password" maxLength={20} name="password" placeholder="Password" onChange={handleChange} />
            <input type="button" value="Login" onClick={handleRegisteration} />
          </div>
        )}

        {activePanel === 'register' && (
          <div>
            <h2 style={{color:'green'}}>REGISTER</h2>
            <input type='text' name='name'placeholder='Name' onChange={handleChange}/>
            <input type="text" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text"  maxLength={10} name="phoneno" placeholder="Phone Number" onChange={handleChange} />
            <input type="password" name="password" maxLength={20} placeholder="Password" onChange={handleChange} />
            <input type="password" name="cpassword" maxLength={20}placeholder="Confirm Password" onChange={handleChange} />
            <input type="button" value="Register" onClick={handleRegisteration} />
          </div>
        )}
      </div>


      {error && <p style={{ color: 'red' }}>{error}</p>}
      {activePanel === 'register' && <div>
        <h2 style={{fontSize:'18px'}}>Have an account?</h2>
        <label htmlFor="log-reg-show" style={{color:'green'}} onClick={togglePanel}>
          Login
        </label>
        
      </div>}

      {activePanel === 'login' && <div>
        <h2 style={{fontSize:'18px'}}>Don't have an account?</h2>
        <label htmlFor="log-login-show" style={{color:'green'}} onClick={togglePanel}>
          Register
        </label>
      </div>}
    </div>
    <Footer/>
    </>
    
  );
};

export default Register;
