import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { id,  isFav, faves} = props;
  const { favHandlers, favesArray } = faves
  const { addFav, removeFav } = favHandlers
  const handleClick = () => {
    !!favesArray.includes(id) ? removeFav(id) : addFav(id);
  }
  const selected = (!!favesArray.includes(id))
  console.log(favesArray)
  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleClick} className={`photo-list__fav-icon-svg ${id}`}>
        {<FavIcon selected={selected}/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;