import React ,{useState} from 'react';
 


const Homework2 = () =>{
    const [showBlack ,setShowBlack] = useState(false);

    const change = () =>{
        let text = document.getElementById('txt');
        setShowBlack(!showBlack);
        if(showBlack===true){
            text.innerHTML = "Currently Showing White";
            text.style.backgroundColor  ="black";
            text.style.color  ="white";
        }
        else {
            text.innerHTML = "Currently Showing Black";
            text.style.backgroundColor  ="white";
            text.style.color  ="black";
        }
     }
     return (
        <div className="App">
          <h1 id="txt">Currently Showing White</h1>
          <button onClick={change}>Click Here</button>
        </div>
    )
}

    
export default Homework2;