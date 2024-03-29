import React from 'react';
import Nav from './components/navbar';
import Footer from './components/footer';
import Carousel from './components/carouselbootstrap';
import { Route, Routes,useLocation } from 'react-router-dom';
import AboutUsPage from './components/aboutus/aboutus';
import SetPage from './components/SetPage';
import SliderComponent from './components/Gallery';
import Selection from './components/teams2/Selection';
import Marketing from './components/teams2/portfolio/Marketing';
import Web from './components/teams2/portfolio/Web';
import Field from './components/teams2/portfolio/Field';
import Design from './components/teams2/portfolio/Design';
import Content from './components/teams2/portfolio/Content';
import Reserch from './components/teams2/portfolio/Research';

// import Gallery from './components/Page';

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <div style={{ paddingTop: '80px' }}> {/* Adjust the value according to your navbar height */}
       {location.pathname === '/' && <Carousel />}
        <Routes>
          <Route path='/blog' Component={Carousel} />
          <Route path='/about' Component={AboutUsPage} />
          <Route path='/project' Component={SetPage} />
          <Route path='/team' Component={Selection} />
          <Route path='/gallery' Component={SliderComponent} />
          <Route path='/marketingAndSponcership' element={<Marketing />} />
        <Route path='/webTeam' element={<Web />} />
        <Route path='/researchAndDevelopment' element={<Reserch />} />
        <Route path='/fieldOfficer' element={<Field />} />
        <Route path='/contentDepartment' element={<Content />} />
        <Route path='/designDepartment' element={<Design />} />
          {/* <Route path='/contact' Component={Teams} /> */}
          {/* <Route path='/gallery' Component={Gallery} /> */}
        </Routes>
      </div>
      <Footer id="contact-us" />
    </>
  );
}

export default App;
