import React ,{useState} from 'react';
 


const Homework2 = () =>{
    const [showBlack ,setShowBlack] = useState(false);

    const change = () =>{
        setShowBlack(!showBlack);
    }
     return (
        <div className="App">
           <p style={{color : showBlack ? "white" :"black" , backgroundColor :showBlack ? "black" :"white" }}>{showBlack ? "Now showing black" :"Now showing white " }</p>
          <button onClick={change}>Click Here</button>
        </div>
    )
}

    
export default Homework2;