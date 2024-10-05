import React, { useState, useEffect } from "react";
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUserData(data.slice(0, 4)); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <header>
        <h1>APPX TECH</h1>
        <div className="user-info">
          <p>{username}</p>
          <button
            onClick={() => {
              localStorage.removeItem("username");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="user-cards">
        {userData.length > 0 ? (
          userData.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} className="avatar" />
              <div className="user-details">
                <h3>{user.login}</h3>
                <p>Total Repos: {user.public_repos}</p>
                <p>Total Followers: {user.followers}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
