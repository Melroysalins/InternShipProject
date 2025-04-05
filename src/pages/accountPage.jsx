import React from "react";
import profileImage from "../assesst/Ellipse 114.png";
import { FaCamera } from "react-icons/fa";
const AccountPage = () => {
  return (
    <div className="settings-container">
      <h2 className="settings-heading">Account Settings</h2>
      <div className="settings-card">
        <div className="profile-section">
          <div className="image-wrapper">
            <img src={profileImage} alt="Profile" className="profile-pic" />
            <div className="camera-icon">
              <FaCamera size={10} />
            </div>
          </div>
          <div className="user-details">
            <h3 className="user-name">Marry Doe</h3>
            <p className="user-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountPage;
