import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_CATS_PENDING,
	REQUEST_CATS_SUCCESS,
	REQUEST_CATS_FAILED } from './constants';

	import * as reducers from './reducers';

	describe('searchCats', () => {
		const initialStateSearch = {
			searchField: ''
		}
		it('should return the initial state', () => {
			expect(reducers.searchCats(undefined, {})).toEqual({ searchField: ''})
		})
		it('should handle the CHANGE_SEARCH_FIELD', () => {
			expect(reducers.searchCats(initialStateSearch, {
				type: CHANGE_SEARCH_FIELD,
				payload: 'abc'
			})).toEqual({
				searchField: 'abc'
			})
		})
	})

	describe('requestCats', () => {
		const initialStateCats = {
			isPending: false,
			cats: [],
			error: ''
		}

		it('should return the initial state', () => {
			expect(reducers.requestCats(undefined, {})).toEqual(initialStateCats)
		})

		it('should handle REQUEST_CATS_PENDING action', () => {
			expect(reducers.requestCats(initialStateCats, {
				type: REQUEST_CATS_PENDING,
			})).toEqual({
				cats: [],
				error: '',
				isPending: true
			})
		})

		it('should handle REQUEST_CATS_SUCCESS action', () => {
			expect(reducers.requestCats(initialStateCats, {
				type: REQUEST_CATS_SUCCESS,
				payload: [{
					id: '123',
					name: 'test',
					email: 'test@gmail.com'
				}]
			})).toEqual({
				cats: [{
					id: '123',
					name: 'test',
					email: 'test@gmail.com'
				}],
				error: '',
				isPending: false
			})
		})

		it('should handle REQUEST_CATS_FAILED action', () => {
			expect(reducers.requestCats(initialStateCats, {
				type: REQUEST_CATS_FAILED,
				payload: 'NOOOOOOOOO!!!!!!'
			})).toEqual({
				cats: [],
				error: 'NOOOOOOOOO!!!!!!',
				isPending: false
			})
		})
	})















