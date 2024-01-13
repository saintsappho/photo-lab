import React, { useCallback, useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const PhotoListItem = (props) => {
  const { photos, faves, modality } = props
  const { urls, user, id, location } = photos;
  const { city, country } = location;
  const { regular } = urls;
  const { profile, username } = user;
  const { isModalOpen, modalToggle } = modality
  const { favHandlers, favourited } = faves
  const { toggleFav } = favHandlers

  return (
    <article className="photo-list__item" key={"photo" + id}>
      <PhotoFavButton faves={faves} onToggleFavourite={toggleFav} isFav={favourited} id={id} />
      <img onClick={()=> {modalToggle(photos)}} className="photo-list__image" src={regular} alt={`Photo ${id}: Location ${city}, ${country}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" key={username + id} src={profile} alt={`${username}'s profile`} />
        <div className="photo-list__user-info">
          <div className="">{user.name}</div> {/* this can also be username*/}
          <div className="photo-list__user-location"> {city}, {country}</div>
        </div>
      </div>
      {isModalOpen && <PhotoDetailsModal photos={photos} faves={faves} toggleFav={toggleFav} favourited={favourited} modality={modality}/>}
    </article>
  );
};

export default PhotoListItem;
