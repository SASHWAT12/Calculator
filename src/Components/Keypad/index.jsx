import React from "react";
import "./index.css";
import CustomButtons from "../CustomButtons";

const Keypad = ({handleClick}) => {
    
    
    const buttons = [
        { label: "7" }, { label: "8" }, { label: "9" }, { label: "/", className:"operator" },
        { label: "4" }, { label: "5" }, { label: "6" }, { label: "*", className:"operator" },
        { label: "1" }, { label: "2" }, { label: "3" }, { label: "-", className:"operator" },
        { label: "0", className: "large" }, { label: "." }, { label: "+", className:"operator" }, { label: "=", className:"equal large"},
        { label: "AC", className: "clear large" }
      ];
    return (
        <div className="keypadBox">
            {buttons.map((btn,index)=>
                (
                    <CustomButtons
                    key={index} 
                    label={btn.label}
                    className={btn.className}
                    onClick={() => handleClick(btn.label)}
                    />
                ))}
        </div>
    );
};

export default Keypad;