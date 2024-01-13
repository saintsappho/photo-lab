import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favourited }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!favourited}/>
    </div>
  ) 
};

export default FavBadge;