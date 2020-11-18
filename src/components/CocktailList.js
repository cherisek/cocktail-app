import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import Pagination from './Pagination';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { currentCocktail, cocktailsPerPage, cocktails, loading, paginate } = useGlobalContext();
  if(loading) {
    return <Loading />
  }
  if(currentCocktail.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search critera
      </h2>
    )
  } 

  return (
    <section className='section'>
      <div className='cocktails-center'>
        {currentCocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
      <Pagination cocktailsPerPage={cocktailsPerPage} totalCocktails={cocktails.length} paginate={paginate}/> 
    </section>
  )
} 

export default CocktailList; 