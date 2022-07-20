import { Navigate, useParams } from "react-router-dom";
import getHeroById from "../helpers/getHeroById";


const HeroPage = () => {

  const { id } = useParams();
  // console.log( id );

  const hero = getHeroById( id );
  // console.log( hero );

  if ( !hero ) {
    
    return <Navigate to="/marvel" />
  }


  return (
    <h1>HeroPage</h1>
  )
}

export default HeroPage;