import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! It looks like you lost your way.</h1>
        <Link to='/' className='btn btn-primary'>back home</Link>
      </div>
    </section>
  );
} 

export default Error; 