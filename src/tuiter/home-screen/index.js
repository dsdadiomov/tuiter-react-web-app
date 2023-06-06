// in HomeScreen.js
import React from 'react';
import { useSelector } from 'react-redux';
import TuitsList from '../tuits/TuitsList';
import WhatsHappening from '../whats-happening';

const HomeScreen = () => {
  const tuits = useSelector(state => state.tuits);  // get tuits data from Redux store

  return (
    <div>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitsList />  
    </div>
  );
};

export default HomeScreen;

