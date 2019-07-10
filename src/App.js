import React, { Component } from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import Form from './components/Form'
import TabContainer from './components/TabContainer'
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
			newsList: {},
    };
  }

	getNews = async (event) => {
		
		event.preventDefault()
	
		const {keywords} = event.target.elements
		const searchKeyword = keywords.value

		// Load async data.
		let apiResponse = await API.get('/v2/everything/', {
			params: {
				q: encodeURI(searchKeyword),
				pageSize: 10,
				apiKey: process.env.REACT_APP_NEWS_API_KEY,
			}
		});

		// Parse the results 
		this.setState({
			newsList: apiResponse.data.articles
		});

		// reposition to the search results tab
		document.getElementById("searchTab").click()	
	
	}

  render() {

		if(!this.state.newsList){	//wait for api to retrieve data
			return null	
		} else {
			return (
				<div className="wrapper">
					<NavBar />
					<Form getNews={this.getNews}/>
					<TabContainer newsList={this.state.newsList}/>
				</div>
			)
		}

  }
}

export default App