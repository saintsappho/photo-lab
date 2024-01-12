import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favHandlers, favesArray} = props
  return (
    <ul className="photo-list">
      {photos.map(image => (
        <li key={image.id}>
          <PhotoListItem photos={image} favHandlers={favHandlers} favesArray={favesArray}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
