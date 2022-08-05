import React from 'react'
import { Button, Navbar } from "react-bootstrap";
import "./styles.scss"

export const Header: React.FC = () => {
    return (
        <Navbar sticky='top' bg='dark' className='navbar-container'>
            <Button>test</Button>
        </Navbar>
    )
}
