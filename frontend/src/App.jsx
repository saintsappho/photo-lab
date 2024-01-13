import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

const App = () => {
  const { data, modality, faves } = useApplicationData();
  const {isModalOpen} = modality
  const { photos } = data

  return (
    <div className="App">
      <HomeRoute faves={faves} data={data} modality={modality} />
      {isModalOpen && <PhotoDetailsModal allPhotos={photos} faves={faves} modality={modality} />}
    </div>
  );
};

export default App;
