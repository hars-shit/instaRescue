import React, { useEffect } from "react";
import SignUp from "./components/SignUp";
import './styles/App.css';
// import background from "./assets/background.jpg"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SingUpDoc from "./components/SignUpDoc";
import Selection from "./components/Selection";
import Login from "./components/Login";
function App() {
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
  },[])
  return (
    <div className="web-container">
    <Routes>
      <Route path="/home" element={user ?<Home /> : <Selection />} />
      <Route path="/SignUp"  element={user ? <Home /> : <SignUp/>} />
      <Route path="/vendors/:id" element={user ?<Profile /> : <Selection />}/>
      <Route path="/SignUpDoc" element={user ? <Home /> : <SingUpDoc />}/>
      <Route path="/" element={user ? <Home /> : <Selection />}/>
      <Route path="/Login" element={user ? <Home /> : <Login />} />
    </Routes>
    
    </div>
  );
}

export default App;
