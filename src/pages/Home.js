
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";  // Import axios
import './Home.css';
// import logo from '../assets/logo.png';

const randomQuotesAPI = "https://zenquotes.io/api/random";
const API_KEY = "AIzaSyAqR5BI53X5kWSzUXkH6yTfMMkDQd9yIgA"; // Replace with your YouTube API key
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/videos";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
    fetchTrendingVideos();
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

  const fetchTrendingVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_API_URL, {
        params: {
          key: API_KEY,
          part: "snippet",
          chart: "mostPopular",
          regionCode: "US", // You can change the region code as needed
          videoCategoryId: "17", // Category ID for "Family" videos
          maxResults: 1, // Number of videos to retrieve
        },
      });

      const videoItems = response.data.items;
      const videoData = videoItems.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
        author: item.snippet.channelTitle,
      }));

      setVideos(videoData);
    } catch (error) {
      console.error("Couldn't fetch trending videos:", error);
    }
  };
  
const [showFullDescriptions, setShowFullDescriptions] = useState({});

const handleDescriptionToggle = (videoId) => {
  setShowFullDescriptions((prev) => ({
    ...prev,
    [videoId]: !prev[videoId],
  }));
};

// Home component JSX
return (
    <div className="home">
      <div className="content">
        {/* Random Quote Section */}
        <div className="random-quote">
          <h4>Random Quote</h4>
          <div className="quote">
            <p>{randomQuote}</p>
          </div>
        </div>
  
        {/* Trending Videos Section */}
        <div className="trending-videos">
          <h2>Trending Videos</h2>
          <div className="video-carousel">
            {videos.map((video) => (
             <div className="video-thumbnail">
             <iframe
               title={video.title}
               width="300"
               height="200"
               src={`https://www.youtube.com/embed/${video.id}`}
               frameBorder="0"
               allowFullScreen
             ></iframe>
             <p className="video-title">{video.title}</p>
             <p className="video-description" onClick={() => handleDescriptionToggle(video.id)}>
               {showFullDescriptions[video.id] ? video.description : `${video.description.slice(0, 100)}... See more`}
             </p>
             <p>{video.author}</p>
           </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}  






