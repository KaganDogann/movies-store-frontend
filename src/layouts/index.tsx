import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header } from "./Header";

export const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <Container>
            <Row>
                <Header/>
            </Row>

            <Row className="page-wrapper">{children}</Row>
        </Container>
    );
};