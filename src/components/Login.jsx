import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('signUp'))
    console.log(user)

    const handleLogin = async () =>{
        try{
            if(user?.isStaff){
                const response = await axios.post(`https://vendor-production.up.railway.app/api/vendors/login`,{email:emailRef.current.value, password:passwordRef.current.value})
            response.status === 200 &&
            localStorage.setItem('user',JSON.stringify(response.data))
            window.location.reload()
            navigate('/home')
        }else{
            const response = await axios.post(`https://vendor-production.up.railway.app/api/auth/login`,{email:emailRef.current.value,password:passwordRef.current.value})
            response.status === 200 &&
            localStorage.setItem('user',JSON.stringify(response.data))
            window.location.reload()
            navigate('/home')
        }
        }catch(err){
            console.log(err)
            alert("something went wrong !")
        }

    }
    return(
        <>
                <body className="text-center">
    
    <main className="form-signin">
      <form>
            <div className="form">
    
                {/* for heading div */}
                <div className="heading-container">
                    <h4>Insta Rescue</h4>
                    <p className="main-heading">Get Started</p>
                    <div className="canSignIn">
                        <p>Thanks for comming back!!</p>
                      
                    </div>
                </div>
                {/* for input fields  */}
                <div className="input-container">
             
                    <label >Email<input placeholder="Email" ref={emailRef} name="email" type={'email'} /></label>
                    <label >Password<input placeholder="Password" ref={passwordRef} type={'password'} name="password" /></label>
                   
                </div>
                {/* for submitting form  */}
                <div className="btn-container">
                    <Link><button className="signup-btn" onClick={handleLogin}>Log In</button></Link>
                   
                    </div>
    
            </div>
      </form>
    </main>
    
    
        
      
    
    </body>
        </>
    );
};