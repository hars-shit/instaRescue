import React, { useEffect, useState } from "react";
import '/home/harshit/Desktop/React/ecommerce/src/styles/SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveLoginInfo} from "../store/slice/microReducers";
import axios from "axios";
// import { useDispatch } from "react-redux";
export default function SingUp(){
    const navigate = useNavigate()
    const [storeData,setStoreData]=useState({
        username:"",
        email:"",
        password:"",
        area:"",
        city:""
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
    const handleSubmit=async(e)=>{
        // dispatch(saveLoginInfo(storeData))
        try{
            const response = await axios.post(`https://vendor-production.up.railway.app/api/auth/register`,storeData)
            console.log(response.status)
            response.status === 200 &&
            navigate('/Login')
            localStorage.setItem('signUp',JSON.stringify(response.data))
        }catch(err){
            console.log(err)
        }
    }



    return(
        <body className="text-center">
    
<main className="form-signin">
  <form>
        <div className="form">

            {/* for heading div */}
            <div className="heading-container">
                <h4>VenderStore</h4>
                <p className="main-heading">Get Started</p>
                <div className="canSignIn">
                    <p>Already have an acount</p>
                    <Link to={"/Login"}>Sign In</Link>
                </div>
            </div>
            {/* for input fields  */}
            <div className="input-container">
                <label >Name<input placeholder="username" name="username" type={'text'} onChange={handleChange} /></label>
                <label >Email<input placeholder="email" name="email" type={'email'} onChange={handleChange}/></label>
                <label >Password<input placeholder="password" type={'password'} name="password" onChange={handleChange}/></label>
                <label >Local Area<input placeholder="Name" type={'text'} name="area" onChange={handleChange}/></label>
                <label >City<input placeholder="Name"  type={'text'} name="city" onChange={handleChange}/></label>
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