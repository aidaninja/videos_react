import axios from 'axios';

const KEY = 'AIzaSyDygysVFQyGPx3I-_gLdTSxpRusElZE_-8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

