import { shallow, mount, render} from 'enzyme';
import React from 'react';
import CardList from './CardList';


it('expect to render CardList component', () => {
	const mockCats = [
	{
		id: 1,
		name: 'John Snow',
		username: 'johnjohn',
		email: 'john@gmail.com'
	}
	]
	expect(shallow(<CardList cats={ mockCats } />)).toMatchSnapshot();
})

