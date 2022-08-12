import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import MovieAPIService from "../../api/services/movie.service";
import { MovieDetailModal } from "../../models/MovieDetail";
import "./styles.scss";

export const MovieDetail: React.FC = () => {
  const [movieDetailData, setMovieDetailData] = useState<MovieDetailModal>();

  let { movieId } = useParams();
  useEffect(() => {
    let movieAPIService = new MovieAPIService();

    movieAPIService
      .getMovieDetailByMovieId(movieId)
      .then((result) => setMovieDetailData(result.data));
  }, []);
  const imageAdress = "https://localhost:5001/Uploads/Images/";
  console.log(movieDetailData?.videoLink);

  const navigate = useNavigate();
  return (
    <Container>
      <object width="100%" height="600">
        <param name="movie" value={movieDetailData?.videoLink} />
        <embed src={movieDetailData?.videoLink} width="100%" height="600" />
      </object>
      <Container className="movie-container">
        <h3 className="movie-title">{movieDetailData?.movieName}</h3>
        <Row>
          <Col xs={3}>
            <Image
              className="movie-image"
              src={imageAdress + movieDetailData?.imagePath}
            />
          </Col>
          <Col xs={9}>
            {" "}
            <p className="movie-text ">{movieDetailData?.description}</p>
            <div className="movie-fields-container">
              <i className="bi bi-star-fill imdb-icon"></i>
              <h6 className="movie-imdb-rate ">
                IMDb Puanı: {movieDetailData?.imDbRating}
              </h6>
            </div>
            <div className="movie-fields-container">
              <h5 className="movie-text">Yönetmenler:</h5>
              {movieDetailData?.directors?.map((director) => (
                <h6 className="movie-fields">{director.directorName}</h6>
              ))}
            </div>
            <div className="movie-fields-container">
              <h5 className="movie-text">Türler:</h5>
              {movieDetailData?.genres?.map((genre) => (
                <h6 className="movie-fields">{genre.genreName}</h6>
              ))}
            </div>
            <div className="movie-fields-container" >
              <h5 className="movie-text">Oyuncular:</h5>
              {movieDetailData?.actors?.map((actor) => (
                <h6 className="movie-fields" onClick={() => navigate("/actors/"+ actor.actorId)}>{actor.actorName}</h6>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
