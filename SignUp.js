import React from 'react'
import {useFormik} from 'formik'
import * as yup  from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






const SignUp = () => {
  const navigate = useNavigate()
    
    const {values ,handleBlur, handleChange , handleSubmit  }= useFormik({
        initialValues : {email : "" , password : "" , confirmPassword : "" ,role:"",job:"",grade:"",maritalStatus:"",name:"" } , 
        validationSchema:yup.object().shape(
          {
            email:yup.string().email().required() ,
            password:yup.string().min(6).required() ,
            confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
            role: yup.string().required().matches(/^[0-9]+$/, "Must be only digits").min(4, 'Must be exactly 5 digits').max(4, 'Must be exactly 5 digits'),
            job:yup.string(),
            grade:yup.string(),
            maritalStatus:yup.string(),
            name:yup.string()
      
          })
      , onSubmit : (values)=>{
        axios.post('https://server-social-benefits.vercel.app/signup', {
        email: values.email,
        password: values.password ,
        role : values.role ,
        job:values.job,
        grade : values.grade,
        maritalStatus : values.maritalStatus ,
        name : values.name
      })
      .then(response => {
        console.log(response.data);
        navigate('/home')
      })
      .catch(error => {
        console.error(error.response.data);
      });
      } }); 
   // const jsonData = {"description":"Article 1: The committee provides a retirement grant to all workers and teachers of the school who have retired, including those who have received a termination of contract due to retirement and those who have retired after a long-term illness leave.\nArticle 2: The value of this grant is a maximum of seventy thousand (70,000.70) Algerian dinars."};
//<div className='text-3xl' dangerouslySetInnerHTML={{ __html: jsonData.description.replace(/\n/g, '<br/>') }} /> 

  return (
    <div className='bg-red-900 h-screen pt-10 w-screen items-center flex flex-col '>
      <form onSubmit={handleSubmit}  className=' w-200 flex flex-col justify-center items-center'>
        <input onBlur={handleBlur}  placeholder="email"  name="email" id="email"  className='w-200 pl-2 placeholder-gray-900  bg-gray-400 m-2' value={values.email} onChange={handleChange}/>
        <input type="password" onBlur={handleBlur}  placeholder="password"  name="password" id="password" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.password} onChange={handleChange}/>
        <input type="password" onBlur={handleBlur}  placeholder="confirm password"  name="confirmPassword" id="confirmPassword" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.confirmPassword} onChange={handleChange}/>
        <input onBlur={handleBlur}  placeholder="role"  name="role" id="role" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.role} onChange={handleChange}/>
        <input onBlur={handleBlur}  placeholder="job"  name="job" id="job" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.job} onChange={handleChange}/>
        <input onBlur={handleBlur}  placeholder="grade"  name="grade" id="grade" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.grade} onChange={handleChange}/>
        <input onBlur={handleBlur}  placeholder="maritalStatus"  name="maritalStatus" id="maritalStatus" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.maritalStatus} onChange={handleChange}/>
        <input onBlur={handleBlur}  placeholder="name"  name="name" id="name" className='w-200 pl-2 placeholder-gray-900 bg-gray-400 m-2'  value={values.name} onChange={handleChange}/>

        <button className='text-xl font-semibold rounded-lg bg-black px-2 mt-2 py-1  text-white' type="submit" >Sign up</button>
      </form>
         </div>
  )
}

export default SignUp
