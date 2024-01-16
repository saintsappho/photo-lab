import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const {modality, faves, fetchPhotosByTopic} = props
  const {photos, topics} = props.data
  
  const [showFavorites, setShowFavorites] = useState(false);
  const favoritePhotos = faves.favesArray.length > 0
  ? photos.filter(photo => faves.favesArray.includes(photo.id))
  : [];
  const displayedPhotos = showFavorites ? favoritePhotos : photos;
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} faves={faves} fetchPhotosByTopic={fetchPhotosByTopic} setShowFavorites={setShowFavorites}/>
      <PhotoList photos={displayedPhotos} faves={faves} modality={modality}/>
      
    </div>
  );
};

export default HomeRoute;
