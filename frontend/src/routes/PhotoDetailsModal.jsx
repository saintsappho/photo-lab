import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { allPhotos, modality, faves } = props;
  const { modalToggle, isModalOpen, selectedPhoto } = modality;
  const { urls, user, location } = selectedPhoto;
  const { city, country } = location;
  const { regular } = urls;
  const { profile, username } = user;
  const id = selectedPhoto;
  const [ favourited, setFavourited ] = useState();
  // set fave as state
  const toggleFav = () => {
    setFavourited((prev) => !prev);
  }
  let similar = allPhotos.filter(photo => photo.id !== selectedPhoto.id)
  similar = similar.filter(photo => (photo.location.city == selectedPhoto.location.city) || photo.user.name == selectedPhoto.user.name )

  return (
    <div className="photo-details-modal">
      {/*the x button*/}
      <div className='photo-details-modal__top-bar'>
        <button onClick={() => { modalToggle(); }} className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" />
        </button>

        {/*the <3 button*/}
        <PhotoFavButton faves={faves} toggleFav={toggleFav} isFav={favourited} id={Number(selectedPhoto.id)} />
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
