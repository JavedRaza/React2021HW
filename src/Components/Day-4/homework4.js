import React , { useEffect, useState } from "react";
 

 const Multiplier = () => {
  const [first , setFirst] = useState(0);
  const [second , setSecond] = useState(0);
  const [product, setProduct] = useState(0);

   useEffect(()=>{
          setProduct(()=>{
            return first*second;
          })
  } , [first , second])

  return (
    <div className="App">
      <div>
      Enter first number:
      <input type="number" onChange={(e)=> setFirst(e.target.value)}/> 
      <br/>
      <br/>
      Enter second number:
      <input type="number" onChange={(e)=> setSecond(e.target.value)}/> 
      <br/>
      <br/>
      Product is :
      <br/>
      <h1 style={{backgroundColor : "Black" , color:"white"}}> {product}</h1>
      </div>
    </div>
  );
}

export default Multiplier;