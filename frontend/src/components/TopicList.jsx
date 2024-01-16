import React, {useState} from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, fetchPhotosByTopic, topicToggle } = props
  const [thisTopic, setThisTopic] = useState({ isActive: false, id: null });
  const handleClick = (id) => {
    topicToggle(id)
    thisTopic.id === id ? setThisTopic({ isActive: false, id: null }) : setThisTopic({ isActive: true, id: id });
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <span key={topic.id}>
          <TopicListItem thisTopic={thisTopic} handleClick={handleClick} topic={topic} fetchPhotosByTopic={fetchPhotosByTopic}/>
        </span>
      ))}
    </div>
  );
};

export default TopicList;
