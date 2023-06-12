import React from 'react';
import './TuitItem.css';
import TuitStats from './TuitStats';
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import {deleteTuitThunk} from "../services/tuits-thunks";
import "bootstrap-icons/font/bootstrap-icons.css"

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img
              width={70}
              height={70}
              className="rounded-circle"
              src={`/images/${tuit.image}`}
            ></img>
          </div>
          <div className="col-10">
            <div>
              <RxCross2
                className="float-end"
                onClick={() => deleteTuitHandler(tuit._id)}
              />
              {tuit.username} <AiFillCheckCircle color="blue" /> {tuit.handle} •{" "}
              {tuit.time}
            </div>
            <div className="fw-bolder">{tuit.topic}</div>
            <div>{tuit.tuit}</div>
            <TuitStats tuit={tuit} />
          </div>
        </div>
      </li>
    );
  }
  
  export default TuitItem;