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

	filteredCats = () => {
		return this.props.cats.filter(cat => {
			return cat.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		});
	}

	render () {
		const { onSearchChange, cats, isPending } = this.props;
		return isPending ? 
		<h1>Loading</h1> :
		(
			<div className="tc">
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scrollbars style={{ width:'100%', height:'80vh' }}>
					<CardList cats={this.filteredCats()} />
				</Scrollbars>
			</div>
		);	
	}
}


export default MainPage;