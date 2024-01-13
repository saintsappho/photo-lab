import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photos, modality, faves, /*toggleFav,*/ favourited } = props;
  const { modalToggle, isModalOpen, selectedPhoto } = modality;
  const { urls, user, location } = photos;
  const { city, country } = location;
  const { regular } = urls;
  const { profile, username } = user;
  const id = selectedPhoto;
  return (
    <div className="photo-details-modal">
      {/*the x button*/}
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button">
          <img onClick={() => { modalToggle(); }} src={closeSymbol} alt="close symbol" />
        </button>

        {/*the <3 button*/}
        {/* <PhotoFavButton faves={faves} onToggleFavourite={toggleFav} isFav={favourited} id={id} /> */}
      </div>


      {/*the modal panel*/}
      <div className='photo-details-modal__header'>
        <div className="photo-details-modal__images">
          <img className="photo-details-modal__image" src={regular} alt={`Photo ${id}: Location ${city}, ${country}`} />
          <img className="photo-details-modal__photographer-profile" key={username + id} src={profile} alt={`${username}'s profile`} />
        </div>
        <div className="photo-details-modal__photographer-details">
          <div className="photo-details-modal__photographer-info">
            <div className="">{user.name}</div> {/* this can also be username*/}
            <div className="photo-details-modal__photographer-location"> {city}, {country}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PhotoDetailsModal;
