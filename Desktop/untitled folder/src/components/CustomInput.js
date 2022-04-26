import React, { useState } from "react";
import { useDebounce } from "use-debounce";
function CustomInput({ setIsFirstRender }) {
  const [value, setValue] = useState("");
  const [debouncedText] = useDebounce(value, 1000);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsFirstRender(false);
        }}
      />
      <p>Actual value: {value}</p>
      <p>Debounced value: {debouncedText}</p>
    </div>
  );
}

export default CustomInput;
