import React, { useEffect, useState } from "react";
import '../styles/Profile.css';
import {HiOutlineShare} from 'react-icons/hi'
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Profile(){
  const param = useParams().id
  const id = param
  const [vendor, setVendor] = useState()

  useEffect(()=>{
    const getsingleVendor = async () =>{
      try{
        const response = await axios.get(`https://vendor-production.up.railway.app/api/vendors/${id}`)
        setVendor(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getsingleVendor()
  },[])
    return(
        <div className="profile-container">
        
       
         {/* for profile image  */}
  <div  className="profile-image" >
    <img id="img" src={vendor?.image || '/Avatar-PNG-Image.png'} alt="" />
   
   
  </div>

  
 <div className="data-container">
      <div className="name-container">
        <div>
            <div className="personal-data">
            <p id="name-p">{vendor?.username}</p>
          
            
          </div>
      
       
      <div className="lower-data">
        
                    <div className="location">
                  <p className="add-p">{`${vendor?.city} , ${vendor?.area}`}</p>  
                  <button id="share-button" >< HiOutlineShare/></button>
                    </div>
                
     
    
       

        {/* about the user division  */}
       <div className="about">
           <p className="heading-about">Phone Number</p>

                    <a id="about-me" href={`tel:+${vendor?.number}`}>{vendor?.number}</a>
                   
       </div>

       {/* user interest division  */}

       <div className="interest-container">
       <p  className="heading-about">Qualifications</p>
       <div  className="interest">
        <p  className="add-p">{vendor?.qualifications}</p>
        </div>
       </div>
       <div className="edit">
        <button>edit profile</button>
       </div>
       </div>
       </div>
        </div>
        </div>  
        </div>
    );
};