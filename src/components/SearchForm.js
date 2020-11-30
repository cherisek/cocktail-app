import React, {useEffect } from 'react';

const SearchForm = ({ setSearchTerm}) => {
  const searchValue = React.useRef('');

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue.current.value);
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  )
} 

export default SearchForm; 
