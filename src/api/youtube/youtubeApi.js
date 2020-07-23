/* eslint-disable prettier/prettier */
import axios from 'axios';
import url from '../config';

export const youtubeApi = async(callback) => {
    await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCBe-M9HdGtBO0ZxaqtOsMxw&maxResults=5&type=video&key=AIzaSyBWUrKPIHjuYl9Zs2Q-t3EJ0Puk_PwXJeU')
    .then(callback)
    .catch(error=>{
        console.log(error);
    });
};
