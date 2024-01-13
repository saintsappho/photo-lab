import App from 'App';
import React, { useState, useReducer } from 'react';
import topics from "../mocks/topics";
import photos from "../mocks/photos";

const baseState = {
  isModalOpen: false,
  selectedPhoto: null,
  favesArray: [],
}
const alterState = (state, action) => {
  const actionHandlers = {
    toggleModal:{
      ...state,
      isModalOpen: action.payload.isModalOpen,
      selectedPhoto: action.payload.selectedPhoto
    },
    favAdd: {
      ...state,
      favesArray: [...state.favesArray, action.payload.newFav]
    },
    favRemove: {
      favesArray: state.favesArray.filter(id => id !== action.payload.rmId)
    }
  }
  return actionHandlers[action.type] || state;
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(alterState, baseState)
  const modalToggle = (photo) => {
    if (photo) {
      dispatch({type:'toggleModal', payload: {isModalOpen: true, selectedPhoto: photo } });
    } else {
      dispatch({type:'toggleModal', payload: {isModalOpen: false, selectedPhoto: null } });
    }
  };

  const addFav = (newFav) => {
    dispatch({type: 'favAdd', payload: {newFav}})
  };
  
  const removeFav = (rmId) => {
    dispatch({type: 'favRemove', payload: {rmId}})
  };

  const favHandlers = { addFav, removeFav };
  const data = { photos, topics };
  const modality = { ...state, modalToggle };
  const faves = { favesArray: state.favesArray, favHandlers };

  return {data, modality, faves}
};