import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCats } from '../actions.js'

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../components/Header'

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
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scrollbars style={{ width:'100%', height:'80vh' }}>
					<CardList cats={filteredCats} />
				</Scrollbars>
			</div>
		);	
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);