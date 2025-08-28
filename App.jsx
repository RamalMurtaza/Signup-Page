import { useState } from "react";
import { Routes,Route } from "react-router";
import Signin from "./Signin";
import Transaction from "./Transaction";
import Profile from "./Profile";
import Rankings from "./Rankings";

export default function App() {
    


  
  

  return (
    
    <>
      
        <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/ranking" element={<Rankings/>} />
        <Route path="/transaction" element={<Transaction/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>

       </>
  )


}