import { useEffect, useState } from 'react'

function useDebounced(value) {
    const [debouncedValue, setDebouncedValue] = useState(value)
  
    useEffect(() => {
        console.log("setting value")
       let timeOutSession= setTimeout(() => {
            setDebouncedValue(value)
        }, 500);
      
    
      return () => {
        console.log("clearing value")

        clearTimeout(timeOutSession)
      }
    }, [value])
    
  return debouncedValue
  
}

export default useDebounced