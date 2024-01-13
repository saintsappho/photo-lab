import App from 'App';
import React, { useState } from 'react';
import topics from "../mocks/topics";
import photos from "../mocks/photos";

export const useApplicationData = () => {
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
  };

  const [favesArray, setFavesArray] = useState([]);
  const addFav = (newFav) => {
    setFavesArray([...favesArray, newFav]);
  };

  const removeFav = (rmId) => {
    setFavesArray(favesArray.filter(item => item !== rmId));
  };

  const favHandlers = { addFav, removeFav };
  const data = { photos, topics };
  const modality = { isModalOpen, selectedPhoto, modalToggle };
  const faves = { favesArray, favHandlers };

  return {data, modality, faves}
};