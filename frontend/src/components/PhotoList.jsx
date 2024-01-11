import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";
import "../styles/PhotoList.scss";

const PhotoList = () => {
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
