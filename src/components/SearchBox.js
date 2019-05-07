import React from 'react';

const SearchBox = ({search, handleChange}) => {
    return (
        <div>
            <input className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search a robot'
                name='search'
                value={search}
                onChange={handleChange}>
            </input>
        </div>
    )
}

export default SearchBox;