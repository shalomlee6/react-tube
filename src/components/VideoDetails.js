// dummy component only show video details
import React from 'react';

import { Paper, Typography } from '@material-ui/core';

// In functional base components we have access
// Under props
const VideoDetails = ({ video }) => {
    if(!video) 
        return <div>Loading....</div>
    
    const videoSrc= `https://www.youtube.com/embed/${ video.id.videoId }`;

    return (
        <React.Fragment>

                <Paper elevation={6} style={{height: '25rem'}}>
                    <iframe 
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    src={ videoSrc }
                    />
                </Paper>

                <Paper elevation={6} style={ { padding: '20px' } }>
                    <Typography variant="h4">{ video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{ video.snippet.title}</Typography>
                    <Typography variant="subtitle2">{ video.snippet.description}</Typography>
                    <Typography></Typography>
                </Paper>

        </React.Fragment>
    )
}

export default VideoDetails;