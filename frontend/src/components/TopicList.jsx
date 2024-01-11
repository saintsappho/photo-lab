import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics} = props
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <span key={topic.id}>
          <TopicListItem topic={topic}/>
        </span>
      ))}
    </div>
  );
};

export default TopicList;
