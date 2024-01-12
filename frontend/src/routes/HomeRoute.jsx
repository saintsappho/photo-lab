import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const {photos, topics} = props.data
  
  const [favesArray, setFavesArray] = useState([]);

  // Function to add a favorite
  const addFave = (newFave) => {
    setFavesArray([...favesArray, newFave]);
    alert(`Photo ${newFave} has been added to favorites!`);
  };
  const removeFave = (rmId) => {
    setFavesArray(favesArray.filter(item => item !== rmId));
    alert(`Photo ${rmId} is no longer in your favorites.`);
  };
  const clearNotification = () => {
    
  }
  const favHandlers = { addFave, removeFave, clearNotification }
  const faves = {favesArray, favHandlers}
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} faves={faves} />
      <PhotoList photos={photos} faves={faves}/>
    </div>
  );
};

export default HomeRoute;
