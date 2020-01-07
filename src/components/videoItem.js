// dummy component only show video details
import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    console.log("{ onVideoSelect} => ", onVideoSelect)
    if(!video) return <h2>No Thumbnail</h2>


    return (
        <Grid xs={12}>
            <Paper style={ {display: 'flex', flexDirection: 'column' ,justifyContent: 'center', cursor: 'pointer'} } onClick={() => {
                console.log("dsavcfsdvsdvsdvnsdv");
                onVideoSelect(video); 
            }}>
                <img style={ { margin: '10px', width: '80%'} } alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1">
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
    

}

export default VideoItem;