import React, { useEffect, useState } from "react";
import '../styles/NavBar.css';
// import axios from "axios"
import Card from "./Card";
import {HiHome} from 'react-icons/hi';
import {FaUserAlt} from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import {TbApps} from 'react-icons/tb'
import axios from "axios";


export default function NavBar(){
  const navigate=useNavigate();

  const user = JSON.parse(localStorage.getItem('user'))

  const [city, setCity] = useState(user?.city)
  const [area, setArea] = useState(user?.area)
  const [staff, setStaff] = useState([])

  const handleLogout=()=>{
    localStorage.clear()
    navigate("/")
    window.location.reload()
  }

  useEffect(()=>{
    const fetchapi=async()=>{
        if(city || area){
        const response = await axios.get(`https://vendor-production.up.railway.app/api/vendors?city=${city}&area=${area}`)
        setStaff(response.data)
        }else{
        const response = await axios.get(`https://vendor-production.up.railway.app/api/vendors`)
        setStaff(response.data)
        }
    }
    fetchapi();
},[city,area])

    return(
        <>
        <nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <p class="navbar-brand" href="/">Insta Rescue</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="category">
       
                    <input className="city-loc" type="text" placeholder="search  city" value={city} onChange={(e)=>setCity(e.target.value)}/>
                    <input className="city-loc" type="text" placeholder="search  area" value={area} onChange={(e)=>setArea(e.target.value)}/>
            
    </div>
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">

        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <div className="nav-elements">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to={'/'} ><HiHome />Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"><FaUserAlt />Profile</Link>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/"><TbApps />Our App</a>
          </li>
          </div>
            <div className="nav-btn">
              <div>
              <button onClick={handleLogout}>log out</button>
              </div>
             
            </div>
          
                
        </ul>
        
      </div>
    </div>
  </div>
</nav>

<div className="card-container">
{
  staff.map((elem)=>{
    return(
      <>
<Card  elem={elem} />
      </>
    )
  })
}

</div>
        </>
    );
};