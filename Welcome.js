import banner from '../assets/img/banner.jpg';
import overlay from '../assets/img/overlay.png';
import logoesi from '../assets/img/logoesi.png';
import {Link} from 'react-router-dom';
import './Welcome.css';
import  React, { useState } from 'react';
import {useFormik} from 'formik'
import * as yup  from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Welcome() {
  

  const navigate = useNavigate()
  const {values ,handleBlur, handleChange , handleSubmit  }= useFormik({
    initialValues : {email : "" , password : "" } , 
    validationSchema:yup.object().shape({email:yup.string().email().required() ,password:yup.string().required() })
  , onSubmit : (values)=>{axios.post('https://server-social-benefits.vercel.app/login', {
    email: values.email,
    password: values.password
  })
  .then(response => {
  
    console.log(response.data);
   localStorage.setItem('token', response.data.token);
   localStorage.setItem('id', response.data.id);
   console.log(response.data.token);
    console.log(response.data.id)
    navigate('/home')
  })
  .catch(error => {
    console.log(error.response.data);
  });
  } }); 





  return (
    <div className='welcome'>
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit}  className=' w-200 flex flex-col justify-center items-center'>

      <h2> Email </h2>
      <h3> Password </h3>  
      <div class="input-group">  
      <div class="input-field-email"> 
      <input onBlur={handleBlur} placeholder="email"   name="email" id="email"  className='w-200 pl-2 placeholder-gray-900  bg-gray-400 m-2' value={values.email} onChange={handleChange}/>
        </div>
      <div class="input-field-password"> 
      <input  type="password" onBlur={handleBlur} placeholder="password"  name="password" id="password"   value={values.password} onChange={handleChange}/>
      </div>
       </div>
       
       <div className='contactadmin' ><p> Don't have an account ? <a href='/Contact_admin' /*onClick ={()=>setIsAuth(false)}*/>Contact Admin</a> </p></div>
       
       
       <div class="btn-field"> 
     
       <button type="submit">Log in</button>
      
       
       </div>
       </form>

       <div className='logoesi'>
       <img src={logoesi} alt = 'logoesi img'/>
       </div>
   
       <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/Home" className="nav-link">
            Home
          </a>
        </li>
      </ul>
    </nav> 
    
       <div className='banner'>
       <img src={banner}  alt = 'banner img'/>
      </div>
      <div className='overlay'>
       <img src={overlay}  alt = 'overlay img'/>
       </div>
    </div>
  );
}

export default Welcome;