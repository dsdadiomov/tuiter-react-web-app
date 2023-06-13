import React from 'react';
import "../tuits/TuitItem.css"


const TuitSummaryItem = ({
  tuit = {
    "topic": "Space",
    "username": "SpaceX",
    "time": "2h",
    "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "image": "tesla.png"
  }
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div className="tweet-container">
            {tuit.username} • {tuit.time}
          </div>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{tuit.title}</div>
        </div>
        <div className="col-2">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={`/images/${tuit.image}`}
              alt="Tuit Image"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default TuitSummaryItem;
