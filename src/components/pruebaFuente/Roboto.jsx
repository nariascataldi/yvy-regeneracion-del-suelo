import { useState } from 'react';
import './Roboto.css';

export const Roboto = () => {
  const [roboto, setRoboto] = useState(true);
  return (
    <>
      <button onClick={() => setRoboto(!roboto)} > 
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
          <h1>Playing with fonts is fun</h1>
          <h2>Playing with fonts is fun</h2>
          <h3>Playing with fonts is fun</h3>
          <h4>Playing with fonts is fun</h4>
          <h5>Playing with fonts is fun</h5>
          <p>Playing with fonts is fun</p>
        </div> :
        <div className='open'>
          <h1>Playing with fonts is fun</h1>
          <h2>Playing with fonts is fun</h2>
          <h3>Playing with fonts is fun</h3>
          <h4>Playing with fonts is fun</h4>
          <h5>Playing with fonts is fun</h5>
          <p>Playing with fonts is fun</p>
        </div>
      }
    </>
  )
}