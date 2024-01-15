import App from 'App';
import React, { useState, useReducer, useEffect } from 'react';

const alterState = (state, task) => {

  if (task.type === "setPhotos") {
    const photos = task.payload;
    return { ...state, photos };
  }
  if (task.type === "setTopics") {
    const topics = task.payload;
    return { ...state, topics };
  }
  if (task.type === "setPhotosByTopic") {
    const photosByTopic = task.payload;
    return { ...state, photosByTopic };
  }


  const taskHandlers = {
    setModal: {
      ...state,
      isModalOpen: task.payload.isModalOpen,
      selectedPhoto: task.payload.selectedPhoto
    },
    favAdd: {
      ...state,
      favesArray: [...state.favesArray, task.payload.newFav]
    },
    favRemove: {
      ...state,
      favesArray: state.favesArray.filter(id => id !== task.payload.rmId)
    }
  };
  return taskHandlers[task.type] || state;
};

export const useApplicationData = () => {
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    favesArray: [],
    photos: [],
    topics: [],
    photosByTopic: []
  };
  const [state, dispatch] = useReducer(alterState, initialState);

  useEffect(() => {
    Promise.all([
      fetch("/api/photos"),
      fetch("/api/topics")])
      
      .then((responses) => {
        if (!responses[0].ok || !responses[1].ok) {
          console.error(`HTTP error! status: ${responses[0].status} || ${responses[1].status}`);
        }
        return responses;
      })
      .then((data) => {
        data[0].json()
        .then((photos)=>{
          dispatch({ type: "setPhotos", payload: photos });
        }) 
        data[1].json()
        .then((topics)=>{
          dispatch({ type: "setTopics", payload: topics });
        })
      })
      .catch((error) => {
        console.error("Fetching photos failed: ", error);
        console.error("Fetching topics failed: ", error);
      });
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
    .then(response => {
      if (!response.ok ) {
        console.error(`HTTP error! status: ${response.status}`);
      }
      return response;  
    })
    .then((data) => {
      data.json()
      .then((photos)=>{
      dispatch({ type: "setPhotos", payload: photos });
     })
    })
  }

  const toggleModal = (photo) => {
    dispatch({ type: 'setModal', payload: { isModalOpen: photo ? true : false, selectedPhoto: photo } });
  };


  const addFav = (newFav) => {
    dispatch({ type: 'favAdd', payload: { newFav } });
  };

  const removeFav = (rmId) => {
    dispatch({ type: 'favRemove', payload: { rmId } });
  };

  const favHandlers = { addFav, removeFav };
  const data = { photos: state.photos, topics: state.topics };
  const modality = { ...state, modalToggle: toggleModal };
  const faves = { favesArray: state.favesArray, favHandlers };
  return { data, modality, faves, fetchPhotosByTopic };
};