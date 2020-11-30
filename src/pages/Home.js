import React, { useState, useEffect, useCallback } from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('a');

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} /> 
    </main>
  )
}  

export default Home; 