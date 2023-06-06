import React from 'react';
import './TuitItem.css';
import TuitStats from './TuitStats';
import { useDispatch } from 'react-redux';
import { deleteTuit } from '../reducers/tuits-reducer';
import "bootstrap-icons/font/bootstrap-icons.css"

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div className="tuit-item">
      <div className="header">
        <img className="avatar" src={tuit.image} alt="User Avatar" />
        <div className="user-info">
          <span className="username">{tuit.userName}</span>
          <span className="handle">{tuit.handle}</span>
          <span className="time">{tuit.time}</span>
        </div>
      </div>
      <div className="content">
        <p>{tuit.tuit}</p>
      </div>
      <i
        className="bi bi-x-lg delete-button"
        onClick={() => deleteTuitHandler(tuit._id)}
      ></i>
      <TuitStats tuit={tuit} />
    </div>
  );
};

export default TuitItem;
