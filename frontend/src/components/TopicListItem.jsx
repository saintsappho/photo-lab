import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, handleClick, thisTopic } = props;
  const { id, slug, title, } = topic;
  let activeClass = thisTopic.id === id ? 'active-class' : ''

  return (
    <div className={`topic-list__item ${activeClass}`} onClick={() => { handleClick(thisTopic.isActive && thisTopic.id === id ? null : id); }}>
      <span key={id} className={`${slug}`}>{title}</span>
    </div>
  );
};

export default TopicListItem;
