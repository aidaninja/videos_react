import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

import youtube from '../apis/youtube';

class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }

    componentDidMount(){
        this.onTermSearch('react js');
    }

    onTermSearch = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDygysVFQyGPx3I-_gLdTSxpRusElZE_-8',
                    }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        // console.log(this.state.videos);
    }

    onVideoSelected = (selectedVideo)=>{
        // console.log(selectedVideo);
        this.setState({selectedVideo: selectedVideo})
    }
    
    
    render(){
        return(
            <div className="ui container">
                {/* hello world */}
                <SearchBar onSearch={this.onTermSearch} />
                {/* i have {this.state.videos.length} videos */}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onSelected={this.onVideoSelected} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;