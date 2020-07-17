/* eslint-disable prettier/prettier */
import axios from 'axios';
import { YOUTUBE_KEY, CHANNEL_ID } from '../config';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 5,
        type: 'video',
        key: YOUTUBE_KEY,
    },
});
