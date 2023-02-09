import axios from "axios";


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

// instance.get("/movie/456") --> get request to https://api.themoviedb.org/3/movie/456

export default instance;