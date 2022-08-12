import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieAPIService from "../../api/services/movie.service";
import { MovieCard } from "../../components/Cards/MovieCard";
import { CustomPagination } from "../../components/CustomPagination";
import { MovieDetailModal } from "../../models/MovieDetail";

export const MoviesCategories: React.FC = () => {
    const [movies, setMovies] = useState<MovieDetailModal[]>([])
    const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
    let { genreId } = useParams();
    useEffect(() => {
     let movieApiService = new MovieAPIService
     movieApiService.getMoviesDetailsByGenreId(genreId, currentPage).then((result) =>setMovies(result.data));
     movieApiService.getMoviesDetailsTotalPageByGenreId(genreId).then((result) => setTotalPages(result.data));
    }, [genreId, currentPage])
    
  return (
    <div
    
    >
        <div className="cards-wrapper-test">
        {movies.map((movie) => (
            <MovieCard
            {...movie}
            >

            </MovieCard>
        ))}

        </div>
        
         {/* Pagination */}
     {!!movies.length && (
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesCount={totalPages}
          />
        )}
    </div>
  );
};
