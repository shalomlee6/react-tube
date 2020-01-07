// dummy component only show video details
import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './videoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    if(!videos || !onVideoSelect) return <h2>Error in props.videos => NO Videos</h2>;

    const videoList = videos.map( (video) => <VideoItem onVideoSelect={onVideoSelect} key={video.id} video={video}/>);
    
    return videoList;
    
}

export default VideoList;