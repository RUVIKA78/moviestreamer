import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getTrailer } from '../store/movieslice';
import { useEffect } from 'react';

const useMovieId = async (movieId) => {
    // const trailer=useSelector((store)=>store.movie.trailer)
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieById = async () => {
            try {
                const response = await axios.get(`
        https://api.themoviedb.org/3/movie/${movieId}/videos`,
        
                    {
                        method: 'GET',
        
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzdhNzU0MTM3NWExZThhOGFjNGNjMjk3OWU2YzJmZSIsIm5iZiI6MTczMTEyOTQ0NS45Mjk3NTY2LCJzdWIiOiI2NzJlZWU2MTg3MTRhYTcyMWRlMzdiNzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XLDwzy_gpF0ZNU3ny7EKeHcT3Gp2T8UfFmlXH090W-w'
                        }
                    })
        
                console.log(response.data.results);
                const trailer = response?.data?.results?.filter((item) => {
                    return item.type === "Trailer"
                })
                dispatch(getTrailer(trailer.length > 0 ? trailer[0] : response.data.results[0]));
        
        
            } catch (error) {
                console.log(error);
        
            }
        }

        getMovieById();
    }, [])

}

export default useMovieId