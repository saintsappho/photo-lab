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
  };
  const removeFave = (rmId) => {
    setFavesArray(favesArray.filter(item => item !== rmId));
  };
  const favFunctions = { addFave, removeFave }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} favFunctions={favFunctions} favesArray={favesArray}/>
    </div>
  );
};

export default HomeRoute;
