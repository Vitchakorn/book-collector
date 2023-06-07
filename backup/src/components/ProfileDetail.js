import React, {useState, useEffect} from 'react'
import './style/Profilepage.css'
import authConfig from './api/authConfig';


const ProfileDetail = ({user}) => {

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-info">
          <img src='book-background.jpg' alt="Profile Pic" className="profile-picture" />
          <div className="profile-name">
            <h1>{user.username}</h1>
          </div>
          <div className='profile-email'>
            <h4>Email: {user.email}</h4>
          </div>
          <div className="profile-bio">
            <p>wasdwdasdwasdwasdwasdwasdwasdwasdwasd
              wasdwasdwasdwasdwasdwasdwasdwasd
              wasdwasdwasdwasdwadwasdwasdwasdwadwasdwad
              wasdwadadwasdwadwasdawsdawsdawdsdawsdawd</p>
          </div>
        </div>
        
      </div>
      <div className="reporting-container">
        <p>Report</p>
      </div>
      <div className="reporting-details">
        <form action="">
          <div className="form-column">
            <label htmlFor="request">Choose request type</label>
            <select name="request" id="request">
              <option value="book">Books missing / incorrect information</option>
              <option value="issue">Problem issue</option>
              <option value="webbug">Website reporting</option>
            </select>
          </div>
          <div className="form-column">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>
          <div className="form-column">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
          </div>
          <div className="form-column">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default ProfileDetail;