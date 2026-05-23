import React from 'react';
import styles from './Hero.module.css';
import nuIcon from '../../assets/icons/nu-icon.png';

const Hero = ({ emoji = '👋', title1, title1Mobile, title2, title2Mobile, title3, backgroundImage, isMobile }) => {
  const heroStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
    
  return (
    <div className={styles.hero} style={heroStyle}>
      <h1 className={styles.emoji}>{emoji}</h1>
      {isMobile ? (
        <>
          <h1>{title1Mobile}</h1>
          <h2>{title2Mobile}</h2>
        </>
      ) : (
        <>
          <h1>{title1}</h1>
          <h2>{title2}</h2>
        </>
      )}

      <h3 className={styles.titleWithIcon}>
        <img 
          src={nuIcon} 
          alt="Nu" 
          className={styles.icon} 
          loading="lazy" 
          decoding="async" 
        />
        {title3}
      </h3>
    </div>
  );
};

export default Hero;
