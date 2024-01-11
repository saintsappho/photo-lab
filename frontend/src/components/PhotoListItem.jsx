import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {imageSource, username, profile, id } = props.sampleDataForPhotoListItem
  
  return (
    <article className="photo-list-item" key={"photo" + id}>
      <img src={imageSource} alt={`Photo ${id}`} />
      <div className="user-info">
        <h2>{username}</h2>
        <img key={username + id} src={profile} alt={`${username}'s profile`} className="profile-image" />
      </div>
    </article>
  )
};

export default PhotoListItem;
