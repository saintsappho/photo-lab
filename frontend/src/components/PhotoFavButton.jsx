import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const { id, onToggleFavourite, isFav, faves} = props;
  const { favHandlers, favourited } = faves
  const {addFav, removeFav} = favHandlers
  
  const handleClick = () => {
    onToggleFavourite();
    console.log(addFav, removeFav)
    console.log("id", id)
    console.log("isFav", isFav)
    
    isFav ? removeFav(id) : addFav(id);
  }

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className={`photo-list__fav-icon-svg ${isFav ? 'favorited' : ''} ${id}`}>
        {<FavIcon selected={favourited}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;