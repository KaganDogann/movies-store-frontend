import { Routes as RouteProvider, Route, Navigate } from "react-router-dom";
import { AllMovies } from "../pages/AllMovies";
import { MovieDetail } from "../pages/MovieDetail";
import { Movies } from "../pages/Movies";
import { MoviesActors } from "../pages/MoviesActors";
import { MoviesCategories } from "../pages/MoviesCategories";
import { SignUp } from "../pages/SignUp";



export const Routes = () => (
    <RouteProvider>
         <Route path="*" element={<Navigate to="/movies" replace />} /> 
        <Route path="movies" element={<Movies />}/> 
        <Route path="moviedetail/:movieId" element={<MovieDetail/>}/>
        <Route path="allmovies" element={<AllMovies/>}/>
        <Route path="moviescategories" element={<MoviesCategories/>}/>
        <Route path="categories/:genreId" element={<MoviesCategories/>}/>
        <Route path="actors/:actorId" element={<MoviesActors/>}/>
        <Route path="signup" element={<SignUp/>}/>
    </RouteProvider>
)