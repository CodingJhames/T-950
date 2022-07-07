import { useCallback, useEffect, useState } from "react"
import ShowIncrement from "./ShowIncrement";



const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      ( value ) => {
        // setCounter( counter + 1 );
        setCounter( (c ) => c + value );
      },
      [],
    )
    
    useEffect(() => {
    //  incrementFather
    }, [incrementFather])
    
    // const increment = () => {
    //     setCounter( counter + 1 );
    // }


  return (
    <>
        <h1> useCallback Hook: {counter}</h1>
        <hr></hr>
        <  ShowIncrement increment={ incrementFather } />
    </>
  )
}

export default CallBackHook