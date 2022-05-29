import axios from "axios";
import imgNotFound from "./img/ImgNotFound.jpg";

export const apiCategory = {
    topRatedMovies: "/movie/top_rated",
    topRatedTv: "/tv/top_rated",
    popularMovies: "/movie/popular",
    popularTv: "/tv/popular",
}

export const tryGetPopularMovies = async (page = 1) => {
    try {
        const res = await axios (`https://api.themoviedb.org/3/movie/popular?api_key=93fb724f966a1f998d5f429ec8d40a05&language=es-ES&page=${page}`);
        return res.data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const tryGetBillboardImg = (path) => {
    return (`https://image.tmdb.org/t/p/w1280${path}`);
}

export const tryGetMedias = async (category, page = 1) => {
    try {
        const res = await axios (`https://api.themoviedb.org/3${category}?api_key=93fb724f966a1f998d5f429ec8d40a05&language=es-ES&page=${page}`);
        return res.data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const tryGetMediaImg = (path) => {
    if (path) {
        return (`https://image.tmdb.org/t/p/w300${path}`);
    } else {
        return (imgNotFound);
    }
}