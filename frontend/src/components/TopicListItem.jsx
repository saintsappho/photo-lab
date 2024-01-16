import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, topicToggle } = props;
  const { id, slug, title, } = topic;
 

  return (
    <div onClick={() => { topicToggle(id); }} className="topic-list__item">
      <span key={id} className={slug}>{title}</span>
    </div>
  );
};

export default TopicListItem;
