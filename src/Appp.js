import React, { useState } from 'react';
 
const Appp = () => {
 
  const list = [1,2,3,4,5,6,7,8,9,10];
 
  const [text,setText] = useState("");
 
  const function1 = () => {
        setText("Function 1");
  }
 
  const function2 = () => {
    setText("Function 2");
  }
 
  const function3 = () => {
    setText("Function 3");
  }
 
  const handleClick = (e) => {
    console.log(e.target.value);
    var x = parseInt(e.target.value);
     if(x === 1 || x === 2 || x === 5 || x === 10)
     function1();
     else if(x === 3 || x === 4)
     function2();
     else 
     function3();
  }
 
  return (   
      <div className="App">
        <div className = "container mt-3">
        <div className = "row">
        {list.map((item,index) =>
        <div className = "col"> 
          <button key ={index} value = {item} onClick={(e) => handleClick(e)}>{item}</button>
          </div>
          )}
        </div>
        <h3>{text}</h3>
        </div>
      </div>
  );
 
}
 
export default Appp;