import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './pages/Home';
import Companies from './pages/Companies';
import Vacancies from './pages/Vacancies';
import Resumes from './pages/Resumes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import BreadCrumbs from './components/header/BreadCrumbs';

import './styles/style.css';
import './assets/css/style.css';
import './assets/css/ecommerce.css';
import './assets/css/cm.css';

import { navLinks } from './utils/navLinks';
import logoHeader from './assets/img/logo.svg';
import logoFooter from './assets/img/logo-white.svg';
import intro from './assets/img/intro-img1.jpg';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// Компонент для обработки маршрутизации и условного рендеринга
const AppContent = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <>
      <Header navLinks={navLinks} title="VacancyKG" logo={logoHeader} />
      {currentUrl === '/' 
        ? <Banner title="Banner" subtitle="Banner" intro={intro} content="dafsf adsfas asdf a" btn1={{name: "fasdfasd", link: "/"}} btn2={{name: "fasdfasd", link: "/"}}  />
        : <BreadCrumbs url={currentUrl} />
      }
      
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/resumes" element={<Resumes />} />
        </Routes>
      </Container>
      <Footer navLinks={navLinks} title="VacancyKG" logo={logoFooter} />
    </>
  );
};

export default App;
