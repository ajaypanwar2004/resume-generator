import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import WebFont from 'webfontloader';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Main from './components/Main';

import AboutNav from './components/Layouts/AboutNav';
import Contact from './components/Layouts/Contact';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
  }, []);

  return (
    <ResumeProvider>

      <Router>

        <Navbar />

        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <Main />
            </>
          } />

          <Route path="/AboutNav" element={<AboutNav />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </Router>

    </ResumeProvider>
  );
}

export default App;