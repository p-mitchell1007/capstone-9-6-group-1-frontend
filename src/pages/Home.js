import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import logo from '../assets/logo.png';

const affirmationsAPI = "https://www.affirmations.dev/";
const API = process.env.REACT_APP_API_URL;

export default function Home () {
    const [affirmation, setAffirmation] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(affirmationsAPI, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((affirmation) => affirmation.json())
            .then((response) => {
                setAffirmation(response);
            })
            .catch((e) => {
                console.log("Something went wrong when fetching affirmations.");
            });
      }, []);

    useEffect (() => {
         fetch(`${API}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((posts) => posts.json())
        .then ((response) => {
            setPosts(response);
        })
        .catch((e) => {
            console.log("Couldn't fetch data");
        });
    }, []);


    return(
        <div className="home">
            <div className="CTA">
                <h3>Welcome to Reflections!</h3>
                <p>Feeling overwhelmed postpartum? Need to talk to others  who are going through the same thing? Join the conversation <Link to="/signup"><span className="click-here">click here</span></Link> and create your own account.</p>
            </div>
            <div className="content-after-cta">
                
                <div className="affirmations">
                    <h4>Words of Affirrmation</h4>
                    <div className="affirmation">
                        <p>{affirmation.affirmation}</p>
                    </div>  
                </div>
                <div className="trending">
                    <h2><span className="trend-title">Trending</span> <span className="posts-title">Posts</span></h2>
                    <div className="posts">
                        {posts.map((post) => (
                            <div key={post.id} className="post">
                            <h4>{post.title}</h4>
                            <p>{post.post_made}</p>
                            <p>{post.content}</p>
                            <img src={logo} alt="reflections logo" className="reflections-logo"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
