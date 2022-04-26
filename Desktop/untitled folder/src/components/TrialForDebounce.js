import React, { useState } from "react";
import useDebounced from "../hooks/useDebounced";

function TrialForDebounce({setIsFirstRender}) {
  const [value, setValue] = useState("");

  let debouncedValue = useDebounced(value);
  // console.log(debouncedValue)
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Actual value: {value}</p>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
}

export default TrialForDebounce;
