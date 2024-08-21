import React from 'react'

export default function CardOdd() {
  return (
    <div>
      <section >
  {/* odd or even numbers */}
  <div className="w3-container" >
 
  <div className="w3-card-4" style={{width:"120%",}}>
    <div style={{backgroundColor: "darkblue"}}>

      <h1 style={{color: "white"}}>Check if the numbers<br></br> are odd or even numbers</h1>
      
     <span style={{color: " white"}}> number1</span><input type="text" id="name" style={{
    width: '50%',
    height: "30px",
    border: "1px solid #ccc",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px"}}></input>
    
            <button style={{width: "50%",
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
