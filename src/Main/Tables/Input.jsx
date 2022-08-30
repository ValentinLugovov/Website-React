import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");

  function changeInput(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <input defaultValue={value} onBlur={changeInput}>
        vdfvfd
      </input>
    </>
  );
};

export default Input;
