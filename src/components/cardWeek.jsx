import React from 'react';
import { useState } from 'react';

export default function CardWeek() {
    
        const [num, setNum] = useState('');
        const [result, setResult] = useState('');
        const handleSubmit = (e) => {
          e.preventDefault();
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const dayIndex = num % 7;
          setResult(`The number ${num} corresponds to ${daysOfWeek[dayIndex]}.`);
        };
       
  return (
    <div>
      <section >
  {/* odd or even numbers */}
  <div className="w3-container" >
 
  <div className="w3-card-4" style={{width:"100%",}}>
    <div style={{backgroundColor: "darkblue"}}>

      <h2 style={{color: "white"}}>Which day of the week,<br></br>is this number?</h2>
      
     <span style={{color: " white"}}> number1</span><input type="text" id="name"  onChange={(e) => setNum(e.target.value)} style={{
    width: '50%',
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px"}}></input>
    
            <button style={{width: "20%",
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    marginLeft: "35%",
    backgroundColor: "#ADD8E6",
    borderRadius: "5px"}} onClick={handleSubmit} >Result</button>
    </div>

    <div  className="w3-container w3-blue">
      <p>Output : {result}</p>
      </div>

  </div>
</div>
  </section>
    </div>
  )
}
