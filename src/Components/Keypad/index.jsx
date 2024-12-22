import React from "react";
import "./index.css";
import CustomButtons from "../CustomButtons";

const Keypad = () => {
    const buttons = ['7','8','9','/',
                     '4','5','6','*',
                     '1','2','3','-',
                     '0',',','+','=',
                     'AC'];

    return (
        <div className="keypadBox">
            {buttons.map((btn)=>
                (
                    <CustomButtons
                    key={btn} 
                    label={btn} 
                    />
                )
            )};
        </div>
    );
}

export default Keypad;