// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from '../src/pages/ProjectPage';
import '../src/assets/styles.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<HomePage />} /> {/* Projects list */}
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;

