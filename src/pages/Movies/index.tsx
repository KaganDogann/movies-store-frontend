import { Children, useEffect, useState } from "react";
import Slider from "react-slick";


import MovieAPIService from "../../api/services/movie.service";
import { MovieCard } from "../../components/Cards/MovieCard";
import { MovieModel } from "../../models/Movie";

import "./styles.scss";
export const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  useEffect(() => {
    let movieAPIService = new MovieAPIService();
    movieAPIService.getMovies().then((result) => setMovies(result.data));
    console.log(movies);
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div>
              <MovieCard
             {...movie}
              >

              </MovieCard>
            </div>
          ))}
       
        </Slider>
      </div>
  );
};
