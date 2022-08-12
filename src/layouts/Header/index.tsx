import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Image, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/images/KDAFLIX.svg";
import logo from "../../assets/images/KDAFLIX.png";
import { CustomBotton } from "../../components/CustomButton";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { CustomMegaMenu } from "../../components/CustomMegaMenu";
import MovieAPIService from "../../api/services/movie.service";
import { Genre } from "../../models/Genre";

export const Header: React.FC = () => {
  const navigate = useNavigate();
 
  
  return (
    <>
      <Navbar sticky="top" bg="dark" className="navbar-container">
        <h3 onClick={() => navigate("*")} style={{ color: "red" }}>
          KDAFLIX
        </h3>

    
          <Nav.Item>
            <Nav.Link onClick={() => navigate("movies")} className="nav-tab">Ana Sayfa</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => navigate("allmovies")}  className="nav-tab" eventKey="link-1">Filmler</Nav.Link>
          </Nav.Item>
          <Nav.Item  >
            <CustomMegaMenu></CustomMegaMenu>

          </Nav.Item>
          {/* <Nav.Item>
            
          </Nav.Item> */}
        

        <ButtonGroup>
          <CustomBotton
            className="navbar-button"
            variant="outline-success"
            text="Giriş Yap"
          ></CustomBotton>
          <CustomBotton
          onClick={() => navigate("signup")}
            className="navbar-button"
            variant="secondary"
            text="Kayıt Ol"
          ></CustomBotton>
        </ButtonGroup>
      </Navbar>
      <hr style={{ color: "white", marginBottom: "25px" }}></hr>
    </>
  );
};
