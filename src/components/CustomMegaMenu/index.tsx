import { useEffect, useState } from "react";
import { Col, Container, Dropdown, NavDropdown, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieAPIService from "../../api/services/movie.service";
import { Genre } from "../../models/Genre";
import "./styles.scss";
import { CustomMegaMenuProps } from "./types";
export const CustomMegaMenu: React.FC<CustomMegaMenuProps> = ({ title }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    let movieApiService = new MovieAPIService();
    movieApiService.getAllGenres().then((result) => setGenres(result.data));
  }, []);

  const navigate = useNavigate();
  return (
    <NavDropdown
      style={{ color: "white" }}
      className="pr-2 py-2 align-text-top"
      title="Kategoriler"
      id="basic-nav-dropdown"
    >
      <Container className="eventsNav pt-0 mt-0">
        <Row>
          <Col xs="12" md="6" className="text-left mega-menu-items">
            {genres.map((genre) => (
              <Dropdown.Item onClick={()=>navigate("/categories/" + genre.id)} className="test">{genre.name}</Dropdown.Item>
            ))}
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
};
