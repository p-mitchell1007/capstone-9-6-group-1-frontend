
import React, { useState, useEffect } from "react";
import axios from "axios";
import YoutubeEmbed from '../components/PPDVideo';

import PPD2 from '../assets/PPD 2.png'
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

    const articleData = response.data.articles.slice(0,3).map((article) => ({
      title: article.title.slice(0, 120) + '...',
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
    <div className="CTA">
      <h3>Welcome to Reflections!</h3>
      <p>Feeling overwhelmed postpartum? Need to talk to others  who are going 
        through the same thing? You are not alone! <span><a href="/forum">Join the conversation</a></span>.</p>
    </div>
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
          Trending Articles <span>on Reflections</span>
        </h2>
        <div className="article-grid">
          {articles.slice(0, 4).map((article) => (
            <div  key={article.id} className="article">
              <img className="article__img" src={PPD2} alt="postpartum"/>
                <h4>{article.title}</h4>
                <p>{article.body}</p>
                <p>
                  Read More
                </p>
            </div>
          ))}
          {/* <iframe width="518" height="365" src="https://www.youtube.com/embed/KsnY-fSfNlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <YoutubeEmbed embedId='KsnY-fSfNlU' />
        </div>
      </div>
    </div>
  </div>
);
}






