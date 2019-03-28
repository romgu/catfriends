import React from 'react';

const SearchBox = ({ searchfield, searchChange }) =>{
	console.log('SearchBox')
	return (
		<div className='pa2'>
			<label for='searchCats'><input
			className='pa3 ba b--black bg-lightest-yellow ttc helvetica' 
			type='search' 
			placeholder='search cats'
			onChange={searchChange} 
			/></label>
		</div>
	);
}

export default SearchBox;