// 98f3501818ef807371ee3736ca3a84c6
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGYzNTAxODE4ZWY4MDczNzFlZTM3MzZjYTNhODRjNiIsIm5iZiI6MTcyMTAzNDY4My41MDAxNDcsInN1YiI6IjY2OTRlNTFkOTZmZTNmZmY1OGM5ODc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FTEaa4AV5rrCFLH1TLsLntHsJfcrc9pprN7Zx2jxzhA
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGYzNTAxODE4ZWY4MDczNzFlZTM3MzZjYTNhODRjNiIsIm5iZiI6MTcyMTAzNDY4My41MDAxNDcsInN1YiI6IjY2OTRlNTFkOTZmZTNmZmY1OGM5ODc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FTEaa4AV5rrCFLH1TLsLntHsJfcrc9pprN7Zx2jxzhA'; // Замініть YOUR_API_KEY на ваш справжній API ключ
// const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

export default async function  fetchTrendingMovie () {
    const response = await axios.get (`/trending/movie/day`, options);
    return response.data.results;
}


export const searchMovies = async (query) => {
    const response = await axios.get(`/search/movie?query=${query}`, options);
    return response.data.results;
  };
  export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
  };

  export const fetchMovieCredits = async (movieId) => {
      const response = await axios.get(`/movie/${movieId}/credits`, options);
      return response.data.cast;
    };
  export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data.results;
  };