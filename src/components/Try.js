import React, { useState } from "react";

let Try = () => {
  const [first, setfirst] = useState("Enter the text");
  const sub = () => {
    setfirst("You entered the text");
  };
  return (
    <>
      <input type="text" placeholder={first} />
      <button type="submit" onClick={sub}>
        submit
      </button>
    </>
  );
};

export default Try;
