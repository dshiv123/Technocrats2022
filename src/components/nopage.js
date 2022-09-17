import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  
  return (
    <div className="col-lg-8 offset-lg-2">
        <h2>Not found</h2>
        
                <Link to="/" className="btn btn-link">Go home</Link>
        
    </div>
);
  };
  
  export default NoPage;