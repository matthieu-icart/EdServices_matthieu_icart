// IMPORT REACT & REACT-ROUTER-DOM
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// IMPORT LAYOUTS
import Header from './layout/Header/index';
import Footer from './layout/Footer/index';

// IMPORT PAGES
import Home from './pages/Home/index.jsx';
import Contact from './pages/Contact/index.jsx';
import Article from './pages/Article/index.jsx';
import Realisation from './pages/Realisation/index.jsx';
import Commentaire from './pages/Commentaire/index.jsx';
import Error from './pages/Error/index';

// RETURN APP & ROUTER
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* HOME */}
        <Route path="/home" element={<Home />} />
        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />
        {/* ARTICLE */}
        <Route path="/article" element={<Article />} />
        {/* REALISATION */}
        <Route path="/realisation" element={<Realisation />} />
        {/* COMMENTAIRE */}
        <Route path="/commentaire" element={<Commentaire />} />
        {/* ERROR */}
        <Route path="*" element={<Error />} />
        {/* REDIRECT TO HOME */}
        <Route path="" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
