import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Scrollbars } from 'react-custom-scrollbars';
import Header from '../components/Header'

import './MainPage.css';

class MainPage extends Component {
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


export default MainPage;