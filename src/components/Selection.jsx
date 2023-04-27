import React, { useEffect, useState } from "react";
import '../styles/Selection.css';
import { useNavigate } from "react-router-dom";
import back from '../assets/background.jpg'
// import img from '../assets/back.webp'
export default function Selection(){
    const [state, setState] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        state === "user" && navigate('/SignUp')
        state === "staff" && navigate('/SignUpDoc')
    },[state])

    return(
        <div className="selection">
        <img className="back-img" src={back} alt="" />
        <div className="text-container">
        <div className="heading-selection">
                <p className="main-heading ">Get Started</p>
                <h2 >Intsa Rescue</h2>
                <h3>We don't let you to suffer from any incident</h3>
                </div>
        <div className="info">
          
        <select onChange={(e)=>setState(e.target.value)}>
            <option value={0}>-Sign-in as-</option>
            <option value={"user"}>User</option>
            <option value={"staff"}>Medical Staff</option>
        </select>
        </div>
        </div>
        </div>
    );
};