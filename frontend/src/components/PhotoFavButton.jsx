import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const { id, onToggleFavourite, isFav, favHandlers, favesArray} = props;
  const {addFave, removeFave} = favHandlers
  const handleClick = (event) => {
    onToggleFavourite();
    isFav ? removeFave(id) : addFave(id);
    
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