import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Divider from './components/Divider/Divider';
import Description from './components/Description/Description';
import Timeline from './components/Timeline/Timeline';
import EducationTable from './components/EducationTable/EducationTable';
import Contact from './components/Contact/Contact';
import { appConfig } from './data/appConfig';
import { useState, useEffect } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      <NavBar />
      <div id="hero-section">
        <Hero {...appConfig.hero} isMobile={isMobile} />
      </div>
      <div id="about-section">
        <Divider title={appConfig.about.title} />
        <Description {...appConfig.description} />
      </div>
      <div id="experience-section">
        <Divider title=" - Experience - " />
        <Timeline companies={appConfig.companies} />
      </div>
      <div id="education-section">
        <Divider title=" - Education - " />
        <EducationTable education={appConfig.education} />
      </div>
      <div id="contact-section">
        <Divider title=" - Contact - " />
        <Contact contact={appConfig.contact} />
      </div>
    </>
  );
}

export default App;
