import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { inc,dec } from './redux/Myactionsflist';

function Homepage() {
  const myage = useSelector((state) => state.counter.age);
  const xyz = useDispatch();

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
        <h1>Home page</h1>
      <h2>{myage}</h2>


<button onClick={() => xyz(inc())}> Increment </button>
<button onClick={() => xyz(dec())}> dec </button>

        </div>
      </div>
    </div>
  )
}

export default Homepage