

import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';

const randomQuotesAPI = "https://api.quotable.io/random";
const POSTPARTUM_DEPRESSION_API_KEY = "70b9e2cab3fe4b1ea0bf6977264f5d99";

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchRandomQuote();
    fetchArticles(); // Fetch articles here
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(randomQuotesAPI);
      const randomQuoteData = response.data;
      setRandomQuote(`${randomQuoteData.content} - ${randomQuoteData.author}`);
    } catch (error) {
      console.error("Something went wrong when fetching random quotes:", error);
    }
  };

const fetchArticles = async () => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "postpartum depression",
        apiKey: POSTPARTUM_DEPRESSION_API_KEY,
      },
    });

    const articleData = response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
    }));

    setArticles(articleData);
  } catch (error) {
    console.error("Couldn't fetch articles:", error);
  }
};



return (
  <div className="home">
    <div className="content">
      {/* Random Quote Section */}
      <div className="random-quote">
        <h4>Daily Quotes</h4>
        <div className="quote">
          <p>{randomQuote}</p>
        </div>
      </div>

      {/* Articles Section */}
      <div className="related-articles">
        <h2>
          Trending Articles <span>on Postpartum Depression</span>
        </h2>
        <div className="article-grid">
          {articles.slice(0, 4).map((article) => (
            <div key={article.id} className="article">
              {/* Logo */}
              <img src="logo.png" alt="Your Logo" className="logo" />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                {/* Add your article link here */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}






