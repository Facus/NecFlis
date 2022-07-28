import { useEffect, useState } from 'react'
import { randomIndex } from '../../../utils/utils'
import { tryGetPopularMovies, tryGetBillboardImg } from '../../../apiConfig'

export const useApi = () => {

    // Get Movies data

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async () => {
        setIsLoading(true);
        setError(null);

        const res = await tryGetPopularMovies();
        if (res.length === 0) {
            setError("Error al cargar los datos");
            console.log('Error al cargar los datos')
        } else {
            setMovies(res);
            // console.log(res); // Descomentar para ver los datos
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);


    // Get Random Movie

    const [randomMovie, setRandomMovie] = useState(null)
    const [randomMovieImg, setRandomMovieImg] = useState(null)

    const getRandomMovie = () => {

        if (movies.length === 0) {
            return;
        } else {
            const selectedMovie = movies[randomIndex(0, movies.length - 1)]
            setRandomMovie(selectedMovie);
            
            const backgroundImage = tryGetBillboardImg(selectedMovie.backdrop_path);
            setRandomMovieImg(backgroundImage);
        }
    }

    useEffect(() => {
        getRandomMovie(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies]);




  return [movies, isLoading, error, randomMovie, randomMovieImg];
}
