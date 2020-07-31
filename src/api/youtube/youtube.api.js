export const Culto_louvor = async (callback) => {
    await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=Igreja%20Batista%20Regular%20parque%20ipe&type=video&key=AIzaSyDze8u0YmpbYz0ad6Wn2W7d8hzkVmDSdCI")
            .then(response=>response.json())
            .then(callback)
            .catch(error=>{
                console.log(error.message);
            });
}

export const Oracao_meio = async (callback) => {
    //
}

