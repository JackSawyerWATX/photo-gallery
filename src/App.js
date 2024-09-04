// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Introduction from "./components/Introduction.js"
import PhotoGallery from "./components/PhotoGallery.js"
import '../src/components/styles.css';

function App() {
return (
    <Router>
    <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/gallery" element={<PhotoGallery />} />

        </Routes>
    </div>
    </Router>
);
}

export default App;
