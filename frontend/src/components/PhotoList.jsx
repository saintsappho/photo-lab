import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favFunctions, favesArray} = props
  return (
    <ul className="photo-list">
      {photos.map(image => (
        <li key={image.id}>
          <PhotoListItem photos={image} favFunctions={favFunctions} favesArray={favesArray}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
