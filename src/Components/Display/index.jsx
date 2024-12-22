import React, { useState } from "react";
import "./index.css";

const Display = () => {
    const [value,setValue] = useState("");
    return(
        <div className="displayBox">
            <div className="numberValue">
            {value || "0"}
            </div>
        </div>
    );
}

export default Display;