import React, {useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "./mocks/topics";
import photos from "./mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const data = {photos, topics}

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

  return (
    <div className="App">
      <HomeRoute data={data} modality={modality}/>
    </div>
  );
};

export default App;
