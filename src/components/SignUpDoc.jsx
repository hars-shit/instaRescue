import React, { useState } from "react";
import '/home/harshit/Desktop/React/ecommerce/src/styles/SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveLoginInfo} from "../store/slice/microReducers";
import axios from "axios";
// import { useDispatch } from "react-redux";
export default function SingUpDoc(){
    const navigate = useNavigate()
    const [storeData,setStoreData]=useState({
        username:"",
        email:"",
        password:"",
        area:"",
        city:"",
        number:"",
        qualifications:""

    })
    // const user = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    const handleChange=(e)=>{
   
        const name=e.target.name;
        const value=e.target.value;
        setStoreData((pre)=>{
            return { ...pre,[name]:value} ;
        })
    };
    const handleSubmit= async(e)=>{
        const response = await axios.post(`https://vendor-production.up.railway.app/api/vendors/register`,storeData)
        response.status === 200 &&
        localStorage.setItem('signUp',JSON.stringify(response.data))
        navigate('/Login')
    }



    return(
        <body className="text-center">
    
<main className="form-signin">
  <form>
        <div className="form">

            {/* for heading div */}
            <div className="heading-container">
                <h4>Insta Rescue</h4>
                <p className="main-heading">Get Started</p>
                <div className="canSignIn">
                    <p>Already have an acount</p>
                    <Link to={'/Login'}>Sign In</Link>
                </div>
            </div>
            {/* for input fields  */}
            <div className="input-container">
                <label >Name<input placeholder="Name" name="username" type={'text'} onChange={handleChange} /></label>
                <label >Email<input placeholder="Email" name="email" type={'email'} onChange={handleChange}/></label>
                <label >Password<input placeholder="Password" type={'password'} name="password" onChange={handleChange}/></label>
                <label >Local Area<input placeholder="Name" type={'text'} name="area" onChange={handleChange}/></label>
                <label >City<input placeholder="Name"  type={'text'} name="city" onChange={handleChange}/></label>
                <label >phone.no<input placeholder="Name"  type={'text'} name="number" onChange={handleChange}/></label>
                <label >Qualifications<input placeholder="qualifications"  type={'text'} name="qualifications" onChange={handleChange}/></label>
            </div>
            {/* for submitting form  */}
            <div className="btn-container">
                <Link><button className="signup-btn" onClick={handleSubmit}>Sign Up</button></Link>
               
                </div>

        </div>
  </form>
</main>


    
  

</body>
    )
}