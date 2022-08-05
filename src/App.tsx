import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layouts';
import { Routes } from './routes';
import { Header } from './layouts/Header';



function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
