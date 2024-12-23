import React,{ useState } from "react";
import "./index.css";
import Display from '../Display';
import Keypad from '../Keypad';

const Calculator = () =>{
  const [value,setValue] = useState("");
  const handleClick = (inputVal) =>{
    if (inputVal === "AC") {
      setValue("");
    }
    else if (inputVal === "=") {
        try {
            setValue(eval(value).toString());
        } catch (error) {
            setValue("Error");
        }
    } else {
        setValue(prevValue => prevValue + inputVal);
    }
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