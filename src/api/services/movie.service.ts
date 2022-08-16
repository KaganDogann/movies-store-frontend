import { MovieModel } from "./../../models/Movie";
import axios from "axios";
import { api } from "../api";
import { MovieDetailModal } from "../../models/MovieDetail";
import { Genre } from "../../models/Genre";

export default class MovieAPIService {
  getMovies(): Promise<{ data: MovieModel[] }> {
   
    return axios.get("https://localhost:5001/api/Movies/getall");
  }

  getMoviesDetails(currentPage: number): Promise<{ data: MovieDetailModal[] }> {
  
    return axios.get("https://localhost:5001/api/Movies/getmoviesdetailslist?currentPage="+currentPage);
  }

  getNewsMoviesDetails(): Promise<{ data: MovieDetailModal[] }> {
   
   return axios.get("https://localhost:5001/api/Movies/getnewsmoviesdetails");
 }
 getTopMoviesDetails(): Promise<{ data: MovieDetailModal[] }> {
   
   return axios.get("https://localhost:5001/api/Movies/gettopmoviesdetails");
 }

 getActionMoviesDetails(): Promise<{ data: MovieDetailModal[] }> {
   console.log(axios.get("https://localhost:5001/api/Movies/getactionmoviesdetails"))
   return axios.get("https://localhost:5001/api/Movies/getactionmoviesdetails");
 }

 getTotalPageOfMovies(): Promise<{ data: number }> {
   
  return axios.get("https://localhost:5001/api/Movies/getmoviestotalpage");
}

  getMovieDetailByMovieId(
    movieId: string | undefined
  ): Promise<{ data: MovieDetailModal }> {
    return axios.get(
      "https://localhost:5001/api/Movies/getbyidmoviedetails?movieId=" + movieId
    );
  }

  getAllGenres() :Promise<{data:Genre[]}> {
    return axios.get("https://localhost:5001/api/Genres/getall");
  }

  getMoviesDetailsByGenreId(genreId:string | undefined, currentPage:number) :Promise<{data:MovieDetailModal[]}> {
    return axios.get("https://localhost:5001/api/Movies/getmoviesdetailsbygenreid?genreId=" + genreId+ "&curentPage=" + currentPage);
  }

  getMoviesDetailsTotalPageByGenreId(genreId:string | undefined) :Promise<{data:number}> {
    return axios.get("https://localhost:5001/api/Movies/getmoviesdetailstotalpagesbygenreid?genreId="+ genreId);
  } 

  getMoviesDetailsByActorId(actorId:string | undefined, currentPage:number) :Promise<{data:MovieDetailModal[]}> {
    return axios.get("https://localhost:5001/api/Movies/getmoviesdetailsbyactorid?actorId=" + actorId+ "&curentPage=" + currentPage);
  }
  
  getMoviesDetailsTotalPageByActorId(actorId:string | undefined) :Promise<{data:number}> {
    return axios.get("https://localhost:5001/api/Movies/getmoviesdetailstotalpagesbyactorid?actorId="+ actorId);
  }
}


