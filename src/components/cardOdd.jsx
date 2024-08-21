import React from 'react';
import { useState } from 'react';

export default function CardOdd() {
    const [num, setNum] = useState('');
    const [result, setResult] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if (num % 2 === 0) {
        setResult(`The number ${num} is even.`);
      } else {
        setResult(`The number ${num} is odd.`);
      }
    };
  return (
    <div>
      <section >
  {/* odd or even numbers */}
  <div className="w3-container" >
 
  <div className="w3-card-4" style={{width:"100%",}}>
    <div style={{backgroundColor: "darkblue"}}>

      <h2 style={{color: "white"}}>Check if the numbersare odd or<br></br>even numbers?</h2>
      
     <span style={{color: " white"}}> number1</span><input type="text"  onChange={(e) => setNum(e.target.value)} id="name" style={{
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
    marginLeft: "32%",
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
