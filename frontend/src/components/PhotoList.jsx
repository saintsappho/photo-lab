import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos} = props
  return (
    <ul className="photo-list">
      {photos.map(image => (
        <li key={image.id}>
          <PhotoListItem photos={image}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
