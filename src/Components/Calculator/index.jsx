import React,{ useState } from "react";
import "./index.css";
import Display from '../Display';
import Keypad from '../Keypad';

const Calculator = () =>{
  const [value,setValue] = useState("");
  const handleClick = (inputVal) =>{
    setValue(inputVal);
  }
    return (
        <div className='calculator'>
          <Display 
            value={value}
          />
          <br />
          <Keypad 
            handleClick = {handleClick}
          />
        </div>
    );
}

export default Calculator;