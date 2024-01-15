import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, fetchPhotosByTopic } = props
  const { id, slug, title, } = topic

  return (
    <div onClick={()=> {fetchPhotosByTopic(id)}} className="topic-list__item">
      <span key={id} className={slug}>{title}</span>
    </div>
  );
};

export default TopicListItem;
