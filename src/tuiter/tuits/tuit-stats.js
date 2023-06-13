import React from "react";
import { BsChat } from "react-icons/bs";
import { LuThumbsDown } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { updateTuitThunk } from "../services/tuits-thunks";

function TuitStats({ tuit }) {
  const dispatch = useDispatch();

  const handleDislike = () => {
    dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }));
  };

  const handleLike = () => {
    const updatedTuit = tuit.liked
      ? { ...tuit, likes: tuit.likes - 1, liked: false }
      : { ...tuit, likes: tuit.likes + 1, liked: true };
    dispatch(updateTuitThunk(updatedTuit));
  };

  return (
    <div className="row p-2">
      <div className="col-3">
        <BsChat /> {tuit.replies}
      </div>
      <div className="col-3">
        <AiOutlineRetweet /> {tuit.retuits}
      </div>
      <div className="col-3">
        <span onClick={handleLike}>
          {tuit.liked ? (
            <AiFillHeart color="red" size={18} />
          ) : (
            <AiOutlineHeart size={18} />
          )}
        </span>
        {tuit.likes}
      </div>
      <div className="col-3">
        <span onClick={handleDislike}>
          <LuThumbsDown /> {tuit.dislikes}
        </span>
      </div>
    </div>
  );
}

export default TuitStats;

