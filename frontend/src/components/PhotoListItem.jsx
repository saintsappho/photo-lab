import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {imageSource, username, profile, id, location } = props.sampleDataForPhotoListItem
  const {city, country} = location
  return (
    <article className="photo-list__item" key={"photo" + id}>
      <img className="photo-list__image" src={imageSource} alt={`Photo ${id}: Location ${city}, ${country}`} />
      <div className="photo-list__user-info">
        <div className="photo-list__user-details">
          <h2 className="">{username}</h2>
          <h2 className="photo-list__user-location"> {city}, {country}</h2>
        </div>
        <img className="photo-list__user-profile" key={username + id} src={profile} alt={`${username}'s profile`} />
      </div>
    </article>
  )
};

export default PhotoListItem;
