import React, { useState, useEffect } from 'react';
import Testimonial from './Components/Testimonial';
import axios from 'axios';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import './App.css';

function App() {
  const [ items, setitems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ itemCount, setItemCount ] = useState(0);

// fetching of API
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://testimonialapi.toolcarton.com/api`)
      // console.log(result.data)
      setitems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  },[])
//  function to increment the itemCount state.
  function increment() {
    if (itemCount !==9)
    setItemCount(itemCount + 1)
  }
  //  function to decrement the itemCount state.
  function decrement() {
    if (itemCount !==0)
    setItemCount(itemCount - 1)
  }

  return (
    <>
    <h1 id="head">Testimonials</h1>
    <div className="App">
      <ArrowBackIos color="primary" onClick={decrement} style={{fontSize:60, marginTop:250}} />
     <Testimonial isLoading={isLoading} items={items} itemCount={itemCount} />
     <ArrowForwardIos color="primary" onClick={increment} style={{fontSize:60, marginTop:250}} />
    </div>
    </>
  );
}

export default App;
