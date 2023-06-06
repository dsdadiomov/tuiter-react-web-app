import React, { useState } from 'react';
import './TuitStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const TuitStats = ({ tuit }) => {
  const { replies, retuits, likes } = tuit;
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="tuit-stats">
      <div className="column">
        <FontAwesomeIcon icon={faComment} />
        <span>{replies}</span>
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faRetweet} />
        <span>{retuits}</span>
      </div>
      <div className="column" onClick={handleLike}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isLiked ? 'red' : 'inherit' }} />
        <span>{likeCount}</span>
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
};

export default TuitStats;


