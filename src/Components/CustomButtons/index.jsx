import React from "react";
import "./index.css";

const CustomButtons = ({label,className})=>{
    return(
        <div className={`buttonContainer ${className || ""}`}>
            <button >{label}</button>
        </div>
    );
};

export default CustomButtons;