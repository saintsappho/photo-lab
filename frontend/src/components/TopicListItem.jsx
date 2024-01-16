import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, topicToggle, fetchPhotosById } = props;
  const { id, slug, title, } = topic;
 
  const isActive = !topicToggle;

  // Construct the className based on isActive
  const itemClassName = isActive ? 'active' : '';

  return (
    <div className="topic-list__item" onClick={() => { topicToggle(id); }}>
      <span key={id} className={`${slug} ${itemClassName}`}>{title}</span>
    </div>
  );
};

export default TopicListItem;
