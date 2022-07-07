import { useRef } from "react"

const FocusScreeen = () => {


    const inputRef = useRef();

    // console.log(ref);

    const onClick = () => {
        // document.querySelector( 'input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }


  return (

    <>
        <h1>Focus Screen</h1>
        <hr></hr>

        <input
        ref={inputRef} 
        type="text"
        placeholder="Ingrese su Nombre"
        className="form-control"
        ></input>

        <button className="btn btn-primary mt-2"
        onClick={ onClick }
        >
            Set Focus
        </button>
    
    </>
   
  )
}

export default FocusScreeen