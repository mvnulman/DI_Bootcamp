import React from 'react';

const SearchBox = (props) => {
  const {handleChange} = props;
  return(
    <div>
       <input
       className='pa3 bs b--green bg-lightest-blue'
       placeholder="Search..." type='search'
       onChange={handleChange}
       />
    </div>
  )
}
export default SearchBox
