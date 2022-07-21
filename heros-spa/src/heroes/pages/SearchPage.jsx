import { useLocation, useNavigate } from "react-router-dom";
import HeroCard from "../../auth/components/HeroCard";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroesByName";

const SearchPage = () => {

  const navigate  = useNavigate(); // ! para obetener informacion de la navegación
  const location  = useLocation(); // ! para obetener informacion de la ubicación donde nos encontramos 

  const { q = ''} = queryString.parse( location.search );  // ! para obetener los query params (opcionales)
  // console.log( {query} );
  const heroes = getHeroByName( q );

  const { searchText, onInputChange } = useForm( {
    searchText: q
  });

  const onSearchSubmit = ( e ) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    // console.log( { searchText});

    navigate(`?q=${ searchText}`);
  }

  return (
    
    <>
      <h1>Search</h1>
      <hr></hr>

        <div className="row">
        <div className="col-5">

          <h4>Searching</h4>
          <hr></hr>
          <form onSubmit={ onSearchSubmit} >
            <input
              type={"text"}
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

              <button className="btn btn-outline-primary mt-3">Search</button>

          </form>

          </div>

          <div className="col-7">
            
              <h4>Results</h4>
              <hr></hr>
            
            <div className="alert alert-primary">
              Search a Hero
            </div>

            <div className="alert alert-danger">
              No Results for <b>{ q }</b>
            </div>

            { 
              heroes.map( hero => (
                <HeroCard key={ hero.id} {...hero} />
              ))
             }
            

          </div>

        </div>
    </>
  )
}

export default SearchPage;