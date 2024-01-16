import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, fetchPhotosByTopic, topicToggle } = props
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <span key={topic.id}>
          <TopicListItem topicToggle={topicToggle} topic={topic} fetchPhotosByTopic={fetchPhotosByTopic}/>
        </span>
      ))}
    </div>
  );
};

export default TopicList;
