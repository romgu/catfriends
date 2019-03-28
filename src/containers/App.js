import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCats } from '../actions.js'

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './App.css';


const mapStateToProps = (state) => {
	return {
		searchField: state.searchCats.searchField,
		cats: state.requestCats.cats,
		isPending: state.requestCats.isPending,
		error: state.requestCats.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestCats: () => dispatch(requestCats())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestCats();
	}

	render () {
		const { searchField, onSearchChange, cats, isPending } = this.props;
		const filteredCats = cats.filter(cat => {
			return cat.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? 
		<h1>Loading</h1> :
		(
			<div className="tc">
				<h1 className="f1 marginTop">CatFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList cats={filteredCats} />
				</Scroll>
			</div>
		);	
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);