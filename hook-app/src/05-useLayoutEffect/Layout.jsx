
import { useCounter } from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';
import LoadingQuote from '../03-examples/LoadingQuote';
import Quote from '../03-examples/Quote';
// import { useCounter, useFetch } from '../hooks'

const Layout = () => {

  const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}` );

    const { quote, author } = !!data && data[0];

   

  return (
    <>
    
    <h1>Breaking Bad Quotes</h1>
    <hr></hr>

     
     {
      isLoading
      ? 
      <LoadingQuote  /> :
      < Quote author={ author} quote={quote}/>
     }
    
     <button 
     className='btn btn-primary' 
     disabled={isLoading}
     onClick={ () => increment()}>
     Next Quote 
      </button>

    </>
  )
}

export default Layout