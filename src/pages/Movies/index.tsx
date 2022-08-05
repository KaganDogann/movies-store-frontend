import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import MovieAPIService from "../../api/services/movie.service";
import { MovieCard } from "../../components/Cards/MovieCard";
import { MovieModel } from "../../models/Movie";
import "./styles.scss"
export const Movies: React.FC = () => {


    const [movies, setMovies] = useState<MovieModel[]>([])
    useEffect(() => {
        let movieAPIService = new MovieAPIService()
        movieAPIService.getMovies().then(result =>setMovies(result.data) )
        console.log(movies)
    }, [])
    
  return ( 
    <Stack gap={5}>
        {movies.length ? (
            <Container>
                 {movies.map((movie) => (
                    <MovieCard
                    {...movie}
                    >

                    </MovieCard>
                ))} 
            </Container>
        ) : (null)
        
        }
      
    </Stack>
  );
};
