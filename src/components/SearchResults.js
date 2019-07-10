import React from 'react';
import NewsList from './NewsList';

const SearchResults = (props) => {

	if(!props.newsList){	
		return null

	} else {
		return(
			<div className="results-news-div">
				<NewsList news={props.newsList}></NewsList>
			</div>
			
		)
	}

}

export default SearchResults;