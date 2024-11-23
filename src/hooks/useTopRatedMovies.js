import axios from "axios";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../store/movieslice";
import { TOP_RATED_MOVIE } from "../utils/constant";

const useTopRatedMovies = async() => {
    const dispatch = useDispatch();
    
    try {
        const response = await axios.get(`${TOP_RATED_MOVIE}`, {
            
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzdhNzU0MTM3NWExZThhOGFjNGNjMjk3OWU2YzJmZSIsIm5iZiI6MTczMTEyOTQ0NS45Mjk3NTY2LCJzdWIiOiI2NzJlZWU2MTg3MTRhYTcyMWRlMzdiNzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XLDwzy_gpF0ZNU3ny7EKeHcT3Gp2T8UfFmlXH090W-w'
            }
        }
    );
        dispatch(getTopRatedMovies(response.data.results))
    } catch (error) {
        console.log(error);
        
    }
}

export default useTopRatedMovies