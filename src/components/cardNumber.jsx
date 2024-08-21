import React from 'react'

export default function CardNumber() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      const biggestNumber = Math.max(num1, num2);
      setResult(`The biggest number is: ${biggestNumber}`);
    };
  return (
    <div>
      <section>
  {/* numbers */}
<div className="w3-container">
 
  <div className="w3-card-4" style={{width:"120%",}}>
    <div style={{backgroundColor: "darkblue"}}>
      <h1 style={{color: "white"}}>What is the biggest number?</h1>
     <span style={{color: " white"}}> number1</span><input type="text" id="name" style={{
    width: '50%',
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px"}}></input>
     <div>
     <span style={{color: " white"}}> number2</span><input type="text" id="name" style={{width: "50%",
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px"}}></input>
     </div>
            <button type="text" id='name' style={{width: "50%",
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    marginLeft: "10.5%"}} placeholder='Calculate'></button>
    </div>

    <div  className="w3-container w3-blue">
      <p>Output : The bigest number is x</p>
      </div>

  </div>
</div>
  </section>

    </div>
  )
}
