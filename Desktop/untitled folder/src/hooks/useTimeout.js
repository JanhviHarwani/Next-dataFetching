import React,{useCallback} from "react";

function useTimeout(customFunction, delay) {
  const functionHandled = useCallback(() => {
    customFunction();
  }, [delay]);
  setInterval(functionHandled,delay)

  return <div>useTimeout</div>;
}

export default useTimeout;
