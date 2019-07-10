import React from 'react';
import Article from './Article';

const NewsList = (props) => {

 const news = props.news

	// for each article in news list, create an Article component
	if (news.length > 0) {
		
		const newsContainers = news.map((article) =>
		<Article 
			key={article.title}
			title={article.title} 
			author={article.author}
			content={article.content}
			urlToImage= {article.urlToImage}
			url={article.url}
		/>);
			return(
				<div className="news-wrapper">
					{newsContainers}
				</div>
			)
	} else {
			return(
				<div className="no-news-wrapper">
					<p>No results.</p>
				</div>
			)
	}

}

export default NewsList