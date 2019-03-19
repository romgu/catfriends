import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import { cats } from './cats';

class App extends Component {
	constructor() {
		super()
		this.state = {
			cats: cats,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })

	}

	render () {
		const filteredCats = this.state.cats.filter(cat => {
			return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
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