import React from 'react';
import NewsList from './NewsList';
import API from "../utils/API";

class CountryNews extends React.Component {
  
	constructor(props) {
    super(props);
    this.state = {
      error: null,
			newsList: []
    };
  }

	componentDidMount() {
		this.retrieveNews(this.props.countryId)
	}

	async retrieveNews(countryId) {

		// Load async data.
		let apiResponse = await API.get('/v2/top-headlines/', {
			params: {
				country: countryId,
				pageSize: 3,
				apiKey: process.env.REACT_APP_NEWS_API_KEY,
			}
		});

		// Parse the results 
		this.setState({
			newsList: apiResponse.data.articles
		});

	}

  render() {

		if(!this.state.newsList){	//wait for api to retrieve data
			return null

		} else {
			return(
				<div className="country-news-div">
					<NewsList news={this.state.newsList}></NewsList>
				</div>
				
			)
		}
	}
}

export default CountryNews;