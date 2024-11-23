import { useDispatch } from "react-redux"
import { getUpComingMovies } from "../store/movieslice";
import { UPCOMING_MOVIE } from "../utils/constant";
import axios from "axios";

const useUpComingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const response = await axios.get(`${UPCOMING_MOVIE}`, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzdhNzU0MTM3NWExZThhOGFjNGNjMjk3OWU2YzJmZSIsIm5iZiI6MTczMTEyOTQ0NS45Mjk3NTY2LCJzdWIiOiI2NzJlZWU2MTg3MTRhYTcyMWRlMzdiNzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XLDwzy_gpF0ZNU3ny7EKeHcT3Gp2T8UfFmlXH090W-w'
            }
        });

        dispatch(getUpComingMovies(response.data.results))


    } catch (error) {
        console.log(error);
        
    }
}

export default useUpComingMovies