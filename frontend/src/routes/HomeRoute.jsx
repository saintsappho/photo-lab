import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';


const HomeRoute = (props) => {
  const {modality} = props
  const {photos, topics} = props.data
  const [favesArray, setFavesArray] = useState([]);
  // Functions to add/remove favorites
  const addFave = (newFave) => {
    setFavesArray([...favesArray, newFave]);
    // alert(`Photo ${newFave} has been added to favorites!`);
  };
  const removeFave = (rmId) => {
    setFavesArray(favesArray.filter(item => item !== rmId));
    // alert(`Photo ${rmId} is no longer in your favorites.`);
  };
  const clearNotification = () => {
    
  }
  
  const favHandlers = { addFave, removeFave, clearNotification }
  const faves = {favesArray, favHandlers}
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} faves={faves} />
      <PhotoList photos={photos} faves={faves} modality={modality}/>
      
    </div>
  );
};

export default HomeRoute;
