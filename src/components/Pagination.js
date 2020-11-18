import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ cocktailsPerPage, totalCocktails, paginate }) => {
  const pageNumbers = []; 

  for(let i=1; i <= Math.ceil(totalCocktails / cocktailsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination"> 
        {pageNumbers.map(number => (
          <li key={number} className="page-number">
            <Link onClick={() => paginate(number)} href='!#' className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination; 