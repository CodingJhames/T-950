

import { useCounter } from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';
import LoadingQuote from './LoadingQuote';
import Quote from './Quote';
// import { useCounter, useFetch } from '../hooks'

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}` );
    // console.log({ data, isLoading, hasError });

    const { quote, author } = !!data && data[0];

    // if( isLoading ) {
    //   return(
    //     <h1>Loading...</h1>
    //   )
    // }

  return (
    <>
    
    <h1>Breaking Bad Quotes</h1>
    <hr></hr>

     {/* {
      isLoading
      ?
      (
        <div className='alert alert-info text-center'>
        Loading...
        </div>
      )
      :(
        <blockquote className='blockquote text-end'>
          <p className='mb-1'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      ) 
      
     } */}

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

export default MultipleCustomHooks