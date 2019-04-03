import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';



let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestCats: jest.fn(),
		cats: [],
		searchField: '',
		isPending: false,
	}
	wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filter cats correctly', () => {
	expect(wrapper.instance().filteredCats([])).toEqual([])
})

it('filter cats correctly', () => {
	const mockProps2 = {
		onRequestCats: jest.fn(),
		cats: [{
			id: 3,
			name: 'john',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		isPending: false,
	}
	const wrapper2 = shallow(<MainPage {...mockProps2}/>)
	expect(wrapper2.instance().filteredCats()).toEqual([{
			id: 3,
			name: 'john',
			email: 'john@gmail.com'
		}])
})