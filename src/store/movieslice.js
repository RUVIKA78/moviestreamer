import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null, 
        toggleSearch: false,
        trailer:null,
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }, 
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        }, 
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        }, 
        getUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setToggleSearch: (state) => {
            state.toggleSearch = !state.toggleSearch;
        }, 
        getTrailer: (state, action) => {
            state.trailer=action.payload
        }

    }
})

export const { getNowPlayingMovies, getPopularMovies, getTopRatedMovies , getUpComingMovies, setToggleSearch, getTrailer} = movieSlice.actions;

export default movieSlice.reducer;