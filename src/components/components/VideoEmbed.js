// src/components/components/VideoEmbed.js
import React from 'react';

const VideoEmbed = ({ src }) => {
  return (
    <div className="component video-embed">
      <iframe
        width="560"
        height="315"
        src={src || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Embed"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
