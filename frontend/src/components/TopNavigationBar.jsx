import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigationBar = (props) => {
  const { topics, faves, fetchPhotosByTopic, setShowFavorites } = props 
  const { favesArray } = faves
 
  const topicToggle = (id) => {
    if (id){
      fetchPhotosByTopic(id);
    }
    if (!id || id === null) {
      fetchPhotosByTopic(null);
      setShowFavorites(false)
    };
  };
  return (
    <div className="top-nav-bar">
      <span onClick={() => {topicToggle(null)}} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicToggle={topicToggle} topics={topics} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <span onClick={setShowFavorites} className='top-nav-bar__faves'><FavIcon  selected={true} displayAlert={favesArray.length > 0}/></span>
    </div>
  )
}

export default TopNavigationBar;