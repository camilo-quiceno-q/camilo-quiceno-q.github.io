import React from 'react';
import styles from './Description.module.css'

const Description = ({ image, description }) => {
    return (
        <div className={styles.description}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt="Description" />
            </div>
            <p>{description}</p>  
        </div>
    );
};

export default Description;