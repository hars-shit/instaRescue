import React from "react";
import "../styles/card.css";
import { Link } from "react-router-dom";

export default function Card({elem,name,image,typedata,verify,link}) {

  const handleView =(id) =>{
    console.log(id)
  }
  console.log(elem)
  return (
    <div class="card">
        
            
      <img src={elem?.image || "Avatar-PNG-Image.png"} class="card-img-top img" alt="" />
      <div class="card-body">
        <h6 >{elem.username}</h6>
        <p class="card-text">{elem.qualifications}</p>
        <div className="lower-card">
        <p class="card-text">{verify ? "verify" : "noVerified"}</p>
        <Link to={`/vendors/${elem._id}`} onClick={()=>handleView(elem._id)} class="btn btn-primary">
          view
        </Link>
        </div>
        <div>
        <a href={`tel:+91${elem.number}`}>Direct Call</a>
        </div>
      </div>
    </div>
  );
}
