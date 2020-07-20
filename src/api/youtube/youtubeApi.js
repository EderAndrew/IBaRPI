/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import axios from 'axios';
import { YOUTUBE_KEY, CHANNEL_ID } from '../config';

const youtubeApi = async(props) => {
    return await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}=5&type=video&key=${YOUTUBE_KEY}`)
    .then((response) => {
        props.setVideosData(response.items);
    })
    .catch(error=>{
        console.log(error);
    });
};

const mapStatToProps = state => {
    return {
        videosData: state.y_data.videosData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setVideosData: (item) => dispatch({ type: 'SET_VIDEOSDATA', payload: { item } }),
    };
};
export default connect(mapStatToProps, mapDispatchToProps)(youtubeApi);
