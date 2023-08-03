import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import strings from '../../constants/strings';

const Search = () => {
	return (
		<form className='d-flex' role='search'>
			<Input type='search' name='search' placeholder={strings.search} className='me-2' />
			<Button>{strings.search}</Button>
		</form>
	);
};
export default Search;
