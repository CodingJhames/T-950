import React, { useEffect, useState } from 'react';
import Quote from './components/Quote';
import './index.css'

const initialQuote = {
  text: 'Quote',
  author: 'Author'
}


function App() {
  
  const [ quote, setQuote ] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    setLoading(true);
    const url = 'https://www.breakingbadapi.com/api/quote/random';
  
    const resp = await fetch( url );
    const [ NewQuote ] = await resp.json();

    const { quote: text, author } = NewQuote;
  
  
  setQuote( {
    text,
    author
  })

  setLoading( false );
}


useEffect(() => {
  updateQuote();
}, [])

  
  return (
    <div className='app'>
     
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
      alt="logo"
    />
     <button onClick= { () => updateQuote() } >Get Quote</button>

     { loading ? <h1>Loading</h1> : < Quote quote={quote}/> }

     
    </div>
  );
}

export default App;
