import { useState } from 'react';
import './Roboto.css';

export const Roboto = () => {
  const [roboto, setRoboto] = useState(true);
  return (
    <>
      <button className='bttnPrimario' onClick={() => setRoboto(!roboto)} > 
      {roboto ?
        <div className='roboto'>
          <p>Roboto</p>
        </div> :
        <div className='open'>
          <p>Open Sans</p>
        </div>
      }
      </button>
      {roboto ?
        <div className='roboto'>
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <h2>The quick brown fox jumps over the lazy dog</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <h4>The quick brown fox jumps over the lazy dog</h4>
          <h5>The quick brown fox jumps over the lazy dog</h5>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div> :
        <div className='open'>
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <h2>The quick brown fox jumps over the lazy dog</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <h4>The quick brown fox jumps over the lazy dog</h4>
          <h5>The quick brown fox jumps over the lazy dog</h5>
          <p>The quick brown fox jumps over the lazy dog</p>
        </div>
      }
    </>
  )
}