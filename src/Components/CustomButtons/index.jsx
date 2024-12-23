import React from "react";
import "./index.css";

const CustomButtons = ({label,className,onClick})=>{
    return(
        <div className={`buttonContainer ${className || ""}`}>
            <button onClick={onClick}>{label}</button>
        </div>
    );
};

export default CustomButtons;