import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {get} from '../store/actions';

export default function FuncQuote() {
  const dispatch = useDispatch();
  const { count, results } = useSelector(state => state.quote);

  function getQuote() {
    dispatch(get());
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div>
      <h2>Fuction Quotes {count}</h2>
      <button onClick={getQuote}>Get quote</button>
      <ul>
        {
          results.map((item, idx) => 
            <li key={idx}>{item.quote}</li>
          
          )
        }
      </ul>
    </div>
  )
}
