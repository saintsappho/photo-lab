import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';
import TopicList from './TopicList';

const TopNavigationBar = (props) => {
  const { topics, faves } = props 
  const { favesArray } = faves

 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <span className='top-nav-bar__faves'><FavIcon selected={true} displayAlert={favesArray.length > 0}/></span>
    </div>
  )
}

export default TopNavigationBar;