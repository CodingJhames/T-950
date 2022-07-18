import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const LoginPage = () => {

    const { hola, user, setUser } = useContext( UserContext );

    return (
      <>
          <h1>LoginPage </h1>
          <hr></hr>

          <pre aria-label="pre">
            { JSON.stringify( user, null, 3 ) }   
          </pre> 

          <button 
          className="btn btn-primary"
          onClick={ () => setUser( { id:123, nombre:'Parchita', email:'Parchita@gmail.com'}) } >
            Set user
          </button>    
      </>
    )
  }
  
  export default LoginPage;