import React from 'react';
import './VideoGallery.css'; // Import the CSS file

const videos = [
  {
    id: 'VIDEO_ID1',
    thumbnail: 'thumbnail1.jpg',
    title: 'Video Title 1',
  },
  {
    id: 'VIDEO_ID2',
    thumbnail: 'thumbnail2.jpg',
    title: 'Video Title 2',
  },
  // Add more video objects as needed
];

const VideoGallery = () => {
  const handleVideoClick = (id) => {
    window.location.href = `https://youtu.be/5DRdtahH6VY?si=fX3fUSEEXqX8WRax`;
  };

  return (
    <main>
      <section className="video-gallery">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => handleVideoClick(video.id)}
          >
            <img src={video.thumbnail} alt={`${video.title} Thumbnail`} />
            <h2>{video.title}</h2>
          </div>
        ))}
      </section>
    </main>
  );
};

export default VideoGallery;
