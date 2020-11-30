import React, { useState } from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import Pagination from './Pagination';

const CocktailList = ({loading, cocktails}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = pageNumber => setCurrentPage(pageNumber);  
  const cocktailsPerPage = 6; 

  const indexOfLastCocktail = currentPage * cocktailsPerPage; 
  const indexOfFirstCocktail = indexOfLastCocktail - cocktailsPerPage; 
  const currentCocktail = cocktails.slice(indexOfFirstCocktail, indexOfLastCocktail);

  if(loading) {
    return <Loading />
  }
  if(!cocktails.length) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search critera
      </h2>
    )
  } 

  return (
    <section className='section'>
      <div className='cocktails-center'>
        {currentCocktail.map((item) => <Cocktail key={item.id} {...item} /> )}
      </div>
      <Pagination cocktailsPerPage={cocktailsPerPage} totalCocktails={cocktails.length} paginate={paginate}/> 
    </section>
  )
} 

export default CocktailList; 