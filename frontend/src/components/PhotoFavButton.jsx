import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
// const handleClick = (event) => {
//   console.log("event.target: ", event.target.className);
// }; onClick={handleClick}


function PhotoFavButton(props) {
  const { id, onToggleFavourite, isFav} = props;
  const handleClick = (event) => {
    console.log("event.target: ", event.target.className);
    onToggleFavourite();
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className={`photo-list__fav-icon-svg ${isFav ? 'favorited' : ''} ${id}`}>
        {<FavIcon selected={isFav}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;