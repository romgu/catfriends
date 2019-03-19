import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { cats } from '../cats';

class App extends Component {
	constructor() {
		super()
		this.state = {
			cats: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ cats: users})});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })

	}

	render () {
		const { cats, searchfield } = this.state;
		const filteredCats = cats.filter(cat => {
			return cat.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !cats.length ? 
		<h1>Loading</h1> :
		(
			<div className="tc">
				<h1 className="f1 marginTop">CatFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList cats={filteredCats} />
				</Scroll>
			</div>
		);	
	}
}


export default App;