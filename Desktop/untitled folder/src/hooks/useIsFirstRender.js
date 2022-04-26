import React, { useEffect, useState } from "react";

function useIsFirstRender() {
  const [isFirstRender, setIsFirstRender] = useState(false);
 useEffect(() => {
    setIsFirstRender(true);
  }, []);

  return { isFirstRender,setIsFirstRender };
}

export default useIsFirstRender;
