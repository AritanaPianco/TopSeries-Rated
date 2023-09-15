import axios from "axios";

//base: https://api.themoviedb.org/3/
//busca: tv/top_rated
//api_key: ?api_key=6d60d1c19385d5a548fe9a5653c88a26&language=pt-br

let API = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

export default API;


