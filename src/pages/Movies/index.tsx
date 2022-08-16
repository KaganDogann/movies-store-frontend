import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import MovieAPIService from "../../api/services/movie.service";
import { MovieCard } from "../../components/Cards/MovieCard";
import { CustomMovieSlider } from "../../components/CustomMovieSlider";
import { MovieDetailModal } from "../../models/MovieDetail";

import "./styles.scss";
export const Movies: React.FC = () => {
  const [newsMovies, setNewsMovies] = useState<MovieDetailModal[]>([]);
  const [topMovies, setTopMovies] = useState<MovieDetailModal[]>([]);
  const [actionMovies, setActionMovies] = useState<MovieDetailModal[]>([]);
  useEffect(() => {
    let movieAPIService = new MovieAPIService();
    movieAPIService.getNewsMoviesDetails().then((result) => setNewsMovies(result.data));
    movieAPIService.getTopMoviesDetails().then((result) => setTopMovies(result.data));
    movieAPIService.getActionMoviesDetails().then((result) => setActionMovies(result.data));
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();
  return (
    <div>
      <CustomMovieSlider />
      <h3 className="slider-title">Yeni Eklenenler</h3>
      <Slider {...settings}>
        {newsMovies.map((movie) => (
          <div>
            <MovieCard 
            {...movie}>

            </MovieCard>
          </div>
        ))}
      </Slider>
      <h3 className="slider-title">Popüler Filmler</h3>
      <Slider {...settings}>
        {topMovies.map((movie) => (
          <div>
            <MovieCard 
            {...movie}>

            </MovieCard>
          </div>
        ))}
      </Slider>

      
    </div>
  );
};
