import React, { useState } from 'react';
import './TuitStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faShare, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const TuitStats = ({ tuit }) => {
  const { replies, retweets, likes, dislikes } = tuit;
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes); // Initialize dislikeCount with dislikes
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      if (isDisliked) {
        setDislikeCount(dislikeCount - 1);
        setIsDisliked(false);
      }
    }
    setIsLiked(!isLiked);
  };

  const handleDislike = () => {
    if (isDisliked) {
      setDislikeCount(dislikeCount - 1);
    } else {
      setDislikeCount(dislikeCount + 1);
      if (isLiked) {
        setLikeCount(likeCount - 1);
        setIsLiked(false);
      }
    }
    setIsDisliked(!isDisliked);
  };

  return (
    <div className="tuit-stats">
      <div className="column">
        <FontAwesomeIcon icon={faComment} />
        <span>{replies}</span>
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faRetweet} />
        <span>{retweets}</span>
      </div>
      <div className="column" onClick={handleLike}>
        <FontAwesomeIcon icon={faHeart} style={{ color: isLiked ? 'red' : 'inherit' }} />
        <span>{likeCount}</span>
      </div>
      <div className="column" onClick={handleDislike}>
        <FontAwesomeIcon icon={faThumbsDown} style={{ color: isDisliked ? 'blue' : 'inherit' }} />
        <span>{dislikeCount}</span>
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faShare} />
      </div>
    </div>
  );
};

export default TuitStats;


