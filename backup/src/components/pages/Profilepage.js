import React from 'react'
import './Profilepage.css'

const Profile = ({ name, picture, bio }) => {
  return (
    <div className="profile-container">
      <div className="profile">
        <img src='book-background.jpg' alt="Profile Picture" className="profile-picture" />
        <div className="profile-info">
          <h1>Vitchakorn</h1>
          <p>wasd</p>
        </div>
      </div>
    </div>
    
  );
};

export default Profile;