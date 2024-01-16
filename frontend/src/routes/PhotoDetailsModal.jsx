import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ allPhotos, modality, faves }) => {
  const { modalToggle, selectedPhoto } = modality;
  const { urls, user, location, id } = selectedPhoto;
  const { city, country } = location;
  const { regular } = urls; 
  const { profile, username } = user;

  const similarPhotos = allPhotos.filter(photo =>
    photo.id !== selectedPhoto.id &&
    (photo.location.city === selectedPhoto.location.city || photo.user.name === selectedPhoto.user.name)
  );

  
  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
        <button onClick={() => modalToggle()} className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className='photo-details-modal__header'>
        <div className="photo-details-modal__images">
          <PhotoFavButton faves={faves} id={Number(id)} />
          <img className="photo-details-modal__image" src={regular} alt={`Photo ${id}: Location ${city}, ${country}`} />
          <img className="photo-details-modal__photographer-profile" key={username + id} src={profile} alt={`${username}'s profile`} />
        </div>
        <div className="photo-details-modal__photographer-details">
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-info username">{username}</div> 
            <div className="photo-details-modal__photographer-info name">{user.name}</div> 
            <div className="photo-details-modal__photographer-info photo-details-modal__photographer-location"> {city}, {country}</div>
          </div>
        </div>
      </div>

      {!!allPhotos && <PhotoList photos={similarPhotos} faves={faves} modality={modality} />}
    </div>
  );
};

export default PhotoDetailsModal;
