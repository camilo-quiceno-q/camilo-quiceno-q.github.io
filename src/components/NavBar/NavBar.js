import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

const navItems = [
  { id: 'home', label: 'Home', section: 'hero-section' },
  { id: 'about', label: 'About', section: 'about-section' },
  { id: 'experience', label: 'Experience', section: 'experience-section' },
  { id: 'education', label: 'Education', section: 'education-section' },
  { id: 'contact', label: 'Contact', section: 'contact-section' }
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map(item => document.getElementById(item.section));
      const scrollPos = window.scrollY + 78;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 78;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {

      const offsetTop = element.offsetTop + 8;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>CQQ</span>
        </div>
        
        <button 
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineActive : ''}`}></span>
        </button>
        
        <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.navMenuOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <button
                onClick={() => scrollToSection(item.section)}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
