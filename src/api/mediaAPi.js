import axios from "axios";

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY
const PEXEL_KEY=import.meta.env.VITE_PEXEL_KEY
const TENOR_KEY=import.meta.env.VITE_TENOR_KEY

export async function fetchPhotos(query,page=1,per_page=20){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return response.data
}

export async function fetchVideos(query,page=1,per_page=20){
    const response=await axios.get("https://api.pexels.com/videos/search",{
        params:{query,page,per_page},
        headers:{Authorization:PEXEL_KEY}

})
return response.data
}

export async function fetchGif(query){
    const response=await axios.get("https://api.giphy.com/v1/gifs/search",{
        params:{q:query,api_key:TENOR_KEY,limit:30},
      
})
 return response.data.data
}

