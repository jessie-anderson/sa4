import React from 'react';

const VideoListItem = (props) => {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <div id="video-list-item">
      <li onClick={() => props.onVideoSelect(props.video)}>
        <img src={imgUrl} alt="video" />
      </li>
      <li onClick={() => props.onVideoSelect(props.video)}>
        <div>{props.video.snippet.title}</div>
      </li>
    </div>
    );
};

export default VideoListItem;
