import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const { toggleFav, id,  isFav, faves} = props;
  const { favHandlers } = faves
  const { addFav, removeFav } = favHandlers
  const handleClick = () => {
    toggleFav(id);
    isFav ? removeFav(id) : addFav(id);
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