import { Outlet, Link } from "react-router-dom";
import Navigation from "../components/navigation";
import React from 'react'
import Footer from "../components/footer";

export default function LayOut() {
  return (
    <div>
     
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
