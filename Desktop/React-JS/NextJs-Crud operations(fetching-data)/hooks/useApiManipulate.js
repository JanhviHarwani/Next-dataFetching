import React from 'react'


function useApiManipulate() {
    const [isLoading,setIsLoading]=useState(true)
    const [errorState,setErrorState]=useState(null)

  return (
  {isLoading,setIsLoading,errorState,setErrorState}
  )
}

export default useApiManipulate