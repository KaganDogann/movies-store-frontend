import { Carousel } from "react-bootstrap";
import "./styles.scss"
export const CustomMovieSlider: React.FC = () => {
  return (
    <Carousel className="carousel-container" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_FREEVEE_HOMEAGAIN_CP_HEROPIN/15fd1df6-8c68-4c58-8a36-1000549bca09._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_FREEVEE_HOTELTRANSYLVANIA2_MOTM_CP_HEROPIN/836551fc-7672-4b9f-99b9-fd68ad6bddfe._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_FREEVEE_THEANGRYBIRDSMOVIE_CP_HEROPIN/f1790480-ba48-400a-aba9-b098a04d27ff._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/null/1ec9db3f-6d0c-4114-936a-f74460658776._UR3000,600_SX1500_FMwebp_.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
