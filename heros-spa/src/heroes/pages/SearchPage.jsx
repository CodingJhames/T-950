import HeroCard from "../../auth/components/HeroCard";


const SearchPage = () => {
  return (
    
    <>
      <h1>Search</h1>
      <hr></hr>

        <div className="row">
        <div className="col-5">

          <h4>Searching</h4>
          <hr></hr>
          <form>
            <input
              type={"text"}
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
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
              No Results
            </div>

            {/* <HeroCard {...hero} /> */}
            

          </div>

        </div>


      

      
    </>
    
    
  )
}

export default SearchPage;