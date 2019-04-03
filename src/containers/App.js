import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCats } from '../actions.js'

import MainPage from '../components/MainPage';

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
	render () {
		return <MainPage { ...this.props }/>
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);