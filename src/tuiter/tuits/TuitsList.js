import React from 'react';
import { useSelector } from 'react-redux';
import TuitItem from './TuitItem';

const TuitsList = () => {
  const tuits = useSelector(state => state.tuits.tuits); 

  return (
    <div>
      {tuits.map(tuit =>
        <TuitItem
          key={tuit._id}
          tuit={tuit}
        />
      )}
    </div>
  );
};

export default TuitsList;
