import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {imageSource, username, profile, id, location } = props.sampleDataForPhotoListItem
  const {city, country} = location
  return (
    <article className="photo-list-item" key={"photo" + id}>
      <img src={imageSource} alt={`Photo ${id}: Location ${city}, ${country}`} />
      <div className="user-info">
        <h2>{username}</h2>
        <h3>{city}, {country}</h3>
        <img key={username + id} src={profile} alt={`${username}'s profile`} className="profile-image" />
      </div>
    </article>
  )
};

export default PhotoListItem;
