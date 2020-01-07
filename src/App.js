import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components'

import youtube from './api/youtube';



// Class base component
class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    onVideoSelect = (video) => {
        // update the state
        this.setState( { selectedVideo: video } )
    }

    updateSearch = async (searchText) => {
        const response = await youtube.get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 6,
                    q: searchText,
                    key: 'AIzaSyB4fQ1C94N17J3ZcRVIcpqxUYIOqq4ZbK0'
                }
            }
        );
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        console.log(this.state);
    }


    render () {
        const { videos, selectedVideo } = this.state;
        return(
            <Grid container justify="center" spacing={10}> 
                <Grid item xs={12}>
                    <Grid container spacing={10}> 
                        
                        <Grid item xs={12}>
                            {/**Search Bar Component */}
                            <SearchBar onSubmit={this.updateSearch}/>
                        </Grid>

                        <Grid item xs={8}>
                            {/* Video Details */}
                            <VideoDetails video={ selectedVideo } />
                        </Grid>

                        <Grid item xs={4}>
                            {/* Video List*/}
                            <VideoList videos={ videos } onVideoSelect={this.onVideoSelect}/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        );
    }
}



export default App;


// Function base component
// const app = () => {
//     return (<h1>my react-tube app</h1>);
// }