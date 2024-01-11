import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <span className='top-nav-bar__faves' onClick={""} ><FavIcon selected={true}/></span>
    </div>
  )
}

export default TopNavigationBar;