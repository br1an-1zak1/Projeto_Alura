import React from 'react';
import PropTypes from 'prop-types';
import VideoCardContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      description={videoTitle}
      backColor={categoryColor}
    />
  );
}

VideoCard.defaultProps = {
  videoTitle: '',
  categoryColor: '#000000',
};

VideoCard.propTypes = {
  videoURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string,
  categoryColor: PropTypes.string,
};

export default VideoCard;
