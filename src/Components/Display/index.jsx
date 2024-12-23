import React from "react";
import "./index.css";

const Display = ({value}) => {
    
    return(
        <div className="displayBox">
            <div className="numberValue">
            {value || "0"}
            </div>
        </div>
    );
}

export default Display;