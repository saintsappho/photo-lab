import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFav }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFav}/>
    </div>
  ) 
};

export default FavBadge;