import { Card, ListGroup } from "react-bootstrap";
import "./styles.scss";
import imageTest from "../../assets/images/image-holder.jpg";
import { useEffect, useState } from "react";
import { CustomPagination } from "../../components/CustomPagination";
import MovieAPIService from "../../api/services/movie.service";
import { MovieDetailModal } from "../../models/MovieDetail";
import { MovieCard } from "../../components/Cards/MovieCard";

export const AllMovies: React.FC = () => {

  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allMovies, setAllMovies] = useState<MovieDetailModal[]>([]);

  useEffect(() => {
    let movieApiService = new MovieAPIService
    movieApiService.getTotalPageOfMovies().then((result) => setTotalPages(result.data))
    movieApiService.getMoviesDetails(currentPage).then((result) =>setAllMovies(result.data) )
  }, [currentPage])
  
  return (
    <div
    >
      <div className="cards-wrapper-test">
        {allMovies.map((movie)=> (
        <MovieCard
        {...movie}
        
        >

        </MovieCard>
       ))}
      </div>
       

     {/* Pagination */}
     {!!allMovies.length && (
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pagesCount={totalPages}
          />
        )}
    </div>
    
  );
};
