import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const data = {photos, topics}

  /////////////////////////////////////////////////////////////////
  /////                    modality                              /////
  /////////////////////////////////////////////////////////////////
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const modalToggle = (photo) => {
    if (photo) {
      setSelectedPhoto(photo);
      setModalOpen(true);
    } else {
      setSelectedPhoto(null);
      setModalOpen(false);
    }
  }
  const modality = {isModalOpen, selectedPhoto,  modalToggle}

/////////////////////////////////////////////////////////////////
/////                    faves                              /////
/////////////////////////////////////////////////////////////////
  const [ favesArray, setFavesArray ] = useState([]);
 
  // Functions to add/remove favorites in an array
  const addFav = (newFav) => {
    setFavesArray([...favesArray, newFav]);
    // alert(`Photo ${newFave} has been added to favorites!`);
  };
  const removeFav = (rmId) => {
    setFavesArray(favesArray.filter(item => item !== rmId));
    // alert(`Photo ${rmId} is no longer in your favorites.`);
  };
  
  const favHandlers = { addFav, removeFav }
  const faves = {favesArray, favHandlers}

  return (
    <div className="App">
      <HomeRoute faves={faves} data={data} modality={modality}/>
      {isModalOpen && <PhotoDetailsModal photos={selectedPhoto} faves={faves} toggleFav={toggleFav} favourited={favourited} modality={modality}/>}
    </div>
  );
};

export default App;
