import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, faves} = props
  return (
    <ul className="photo-list">
      {photos.map(image => (
        <li key={image.id}>
          <PhotoListItem photos={image}faves={faves}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
