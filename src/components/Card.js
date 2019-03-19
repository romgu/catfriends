import React from 'react';
import './Card.css'

const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-washed-yellow dib br3 pa3 ma3 dim bw2 shadow-5">
			<img alt='cats' src={`https://robohash.org/${id}?set=set4`} />
			<div>
				<h2 className="f2">{name}</h2>
				<p className="helvetica">{email}</p>
			</div>
		</div>)
}

export default Card;