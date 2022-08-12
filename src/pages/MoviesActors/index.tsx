import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieAPIService from "../../api/services/movie.service";
import { MovieCard } from "../../components/Cards/MovieCard";
import { CustomPagination } from "../../components/CustomPagination";
import { MovieDetailModal } from "../../models/MovieDetail";
import "./styles.scss";

export const MoviesActors: React.FC = () => {
  let { actorId } = useParams();

  const [movies, setMovies] = useState<MovieDetailModal[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    let movieApiService = new MovieAPIService();
    movieApiService
      .getMoviesDetailsByActorId(actorId, currentPage)
      .then((result) => setMovies(result.data));
    movieApiService
      .getMoviesDetailsTotalPageByActorId(actorId)
      .then((result) => setTotalPages(result.data));
  }, [actorId, currentPage]);

  return (
    <div>
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
