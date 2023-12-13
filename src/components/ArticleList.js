import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ArticleList.css';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/articles`);
          setArticles(response.data);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      };
  
      fetchArticles();
    }, []);
  
    return (
      <div className="article-list-container">
        <h1>Featured Articles</h1>
        <ul>
          {articles.map(article => (
            <li key={article.id} className="article-item">
              {/* Wrap the title in an anchor tag */}
              <h2>
                <a href="https://docs.google.com/document/d/1rMz69S1-0tJAEvVorgZCess3KxeF00xWX67njPQCfv4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h2>
              <p className="author-date">
                Author: {article.author} | Date: {new Date(article.creation_date).toLocaleDateString()}
              </p>
              <p className="article-preview">{article.article_preview}</p>
            </li>
          ))}
        </ul>
        {/* Message for users */}
        <p className="access-message">Please click the title of each article to access the full article link.</p>
      </div>
    );
  };
  
  export default ArticleList;
  

