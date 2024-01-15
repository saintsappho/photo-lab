import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from './PhotoDetailsModal';


const HomeRoute = (props) => {
  const {modality, faves, fetchPhotosByTopic} = props
  const {photos, topics} = props.data
 
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} faves={faves} fetchPhotosByTopic={fetchPhotosByTopic}/>
      <PhotoList photos={photos} faves={faves} modality={modality}/>
      
    </div>
  );
};

export default HomeRoute;
