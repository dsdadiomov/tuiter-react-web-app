import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import "./TuitItem.css";
import { RxCross2 } from "react-icons/rx";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../services/tuits-thunks";

function TuitItem({ tuit }) {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <div className="profile-image-container">
            <img
              className="profile-image"
              src={`/images/${tuit.image}`}
              alt="User Profile"
            />
          </div>
        </div>
        <div className="col-10">
          <div>
            <RxCross2
              className="float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            />
            <div className="tweet-container">
              {tuit.username}{" "}
              <AiFillCheckCircle className="check-icon" color="blue" />{" "}
              <span className="light-gray">{tuit.handle} • {tuit.time}</span>
            </div>
          </div>
          <div className="fw-bolder"></div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
}

export default TuitItem;
