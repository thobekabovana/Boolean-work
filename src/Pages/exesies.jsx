import React from 'react';
import CardNumber from '../components/cardNumber';
import CardOdd from '../components/cardOdd';
import CardWeek from '../components/cardWeek';


export default function Exercises() {
  return (
    <>
    <section  style={{width: "100%", height: "50%"}}>
    <div className="top-half" style={{height: "50vh",backgroundImage: "url('https://www.lakeshoresf.com/wp-content/uploads/2021/04/Kids-Fitness-Training-Lincoln-Park-Chicago-scaled.jpeg')",
         backgroundSize: "cover",
         backgroundPosition: "center",
         display: "flex", 
         color:"black",
         fontSize:"10px"}}>
  <h1 style={{marginLeft: "20px"}}>Exercise</h1>
    </div>
 </section>

<div style={{display: "flex", gap: "1%" }} >
<CardNumber/>
<CardOdd/>
<CardWeek/>
</div>


  </>
  )
}
