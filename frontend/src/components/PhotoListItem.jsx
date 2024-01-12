import React, { useCallback, useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photos, favHandlers, favesArray } = props
  const { urls, user, id, location } = photos;
  const { city, country } = location;
  const { regular } = urls;
  const { profile, username } = user;

  const [favourited, setFavourited] = useState(false);
  

  const toggleFav = () => {
    setFavourited((prev) => !prev);
  }

  return (
    <article className="photo-list__item" key={"photo" + id}>
      <PhotoFavButton favHandlers={favHandlers} favesArray={favesArray} onToggleFavourite={toggleFav} isFav={favourited} id={id} />
      <img className="photo-list__image" src={regular} alt={`Photo ${id}: Location ${city}, ${country}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" key={username + id} src={profile} alt={`${username}'s profile`} />
        <div className="photo-list__user-info">
          <div className="">{user.name}</div> {/* this can also be username*/}
          <div className="photo-list__user-location"> {city}, {country}</div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
