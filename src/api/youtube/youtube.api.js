import axios from 'axios';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    headers: {
        Authorization: 'Bearer 32463881764-lovdplq8m86ek2i1qcv3b895s4cqipn5.apps.googleusercontent.com',
        Accept: 'application/json'
    }
})
export const Culto_louvor = async (callback) => {
    await axios.get("/search", {
        params: {
            part: 'snippet',
            maxResults: 10,
            order: 'date',
            q: 'Igreja Batista Regular parque ipe',
            type:'video',
            key: 'AIzaSyDze8u0YmpbYz0ad6Wn2W7d8hzkVmDSdCI'
        }
    }).then(response=>response.json())
      .then(callback)
      .catch(error=>{
        console.log(error.message);
      });
}

export const Oracao_meio = async (callback) => {
    //
}

