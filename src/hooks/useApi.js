import { useEffect, useState } from 'react'
import { randomIndex } from '../utils/utils'
import { tryGetMedias, tryGetBillboardImg } from '../apiConfig'

const useApi = (category) => {

    // Get Movies data

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const getData = async () => {
        setIsLoading(true);
        setError(null);

        const res = await tryGetMedias(category);
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



  return [movies, isLoading, error];
}

export default useApi;