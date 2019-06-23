import React from 'react';
import '../style/VideoItem.css';

class VideoItem extends React.Component {
    onSelected = () =>{
        this.props.onSelected(this.props.video);
    }
    render() {
        const video = this.props.video;
        return (
            <div onClick={this.onSelected} className="video-item item">
                <img className="ui image" alt="" src={video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                    {/* <div className="description">{video.snippet.description}</div> */}
                </div>
            </div>
        )
    }
}

export default VideoItem;