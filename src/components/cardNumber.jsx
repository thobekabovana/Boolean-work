import React from 'react';
import { useState } from 'react';

export default function CardNumber() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [calculate, setCalculate] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      const biggestNumber = Math.max(num1, num2);
      setCalculate(`The biggest number is: ${biggestNumber}`);
    };
  return (
    <div>
      <section>
  {/* numbers */}
<div className="w3-container">
 
  <div className="w3-card-4" style={{width:"100%",}}>
    <div style={{backgroundColor: "darkblue"}}>
      <h1 style={{color: "white"}}>What is the biggest number?</h1>
     <span style={{color: " white"}}> number1</span><input type="text" id="name"  onChange={(e) => setNum1(e.target.value)}
     style={{
    width: '50%',
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px"}}></input>
     <div>
     <span style={{color: " white"}}> number2</span><input type="text" id="name"  onChange={(e) => setNum2(e.target.value)} 
     style={{width: "50%",
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px"}}></input>
     </div>
            <button type="text" id='name'  style={{width: "30%",
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    marginLeft: "22%",
    backgroundColor: "#ADD8E6",
    borderRadius: "5px"
    }}
    onClick={handleSubmit}>Calculate</button>
    </div>

    <div  className="w3-container w3-blue">
      <p>Output :  {calculate}</p>
      </div>

  </div>
</div>
  </section>

    </div>
  )
}
