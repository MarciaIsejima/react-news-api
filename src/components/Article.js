import React from 'react';

class Article extends React.Component {
  render() {
    const { title, urlToImage, author, content, url, isLoading } = this.props;

    const articleDetails = (
      <div className="article-wrapper">
        <div className="article-left">
					<img
						className="article-image"
						src={urlToImage}
						alt={title}
						//style={{maxWidth: "100%", height: "auto" }}
					/>
				</div>
				<div className="article-right">
					<h1>{title}</h1>
					<h2>By: {author}</h2>
					<p className="article-content">{content}</p>
					<a className="article-url" href={url} target="_blank" rel="noopener noreferrer">{url}</a>
				</div>
      </div>
    );

    const loadingMessage = <span>Loading...</span>;

    return (
      <div
        className="article-container"
        //style={{ maxWidth: "300px", minHeight: "250px" }}
      >
        {isLoading ? loadingMessage : articleDetails}
      </div>
    );
  }
}

export default Article;