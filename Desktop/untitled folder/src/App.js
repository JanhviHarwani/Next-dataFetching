import React from "react";
import CustomInput from "./components/CustomInput.js";
import TrialForDebounce from "./components/TrialForDebounce";
import UseSwr from "./components/UseSwr.js";
import useIsFirstRender from "./hooks/useIsFirstRender";

function App() {
  const { isFirstRender,setIsFirstRender } = useIsFirstRender();

  return (
    <>
      <div>
        Is this your first render
        {isFirstRender ? <p>Yes</p> : <p>No.</p>}
      </div>
      <br />
      <br />

      Custom-try:<TrialForDebounce setIsFirstRender={setIsFirstRender} />
      <hr/>
      <br />
      Basic-useDebounce:
      <CustomInput setIsFirstRender={setIsFirstRender} />
      <br />
      <br />
<UseSwr />
    </>
  );
}

export default App;
