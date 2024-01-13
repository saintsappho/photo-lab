import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { allPhotos, modality, faves, toggleFav, favourited } = props;
  const { modalToggle, isModalOpen, selectedPhoto } = modality;
  const { urls, user, location } = selectedPhoto;
  const { city, country } = location;
  const { regular } = urls;
  const { profile, username } = user;
  const id = selectedPhoto;
  let similar = allPhotos.filter(photo => photo.id !== selectedPhoto.id)

  return (
    <div className="photo-details-modal">
      {/*the x button*/}
      <div className='photo-details-modal__top-bar'>
        <button className="photo-details-modal__close-button">
          <img onClick={() => { modalToggle(); }} src={closeSymbol} alt="close symbol" />
        </button>

        {/*the <3 button*/}
        <PhotoFavButton faves={faves} toggleFav={() => toggleFav(id)} isFav={favourited} id={id} />
      </div>

      {/*the modal content*/}
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
      {/*heres where similar pics goes*/}
      {!!allPhotos && <PhotoList photos={similar} faves={faves} modality={modality}/>}
    </div>
  );
};

export default PhotoDetailsModal;
