import React, { useState } from "react";
import Card from "./Card";
function TextContent() {
  const [value, setCurrentValue] = useState("");
  const handleType = (e) => {
    setCurrentValue(e.target.value);

    console.log(value);
  };

  return (
    <div>
      <div className="Main-content">
        <div className=" search-content Main-container-spacing ">
          <p>Search</p>
          <input
            type={"text"}
            placeholder={"write..."}
            onChange={handleType}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default TextContent;
