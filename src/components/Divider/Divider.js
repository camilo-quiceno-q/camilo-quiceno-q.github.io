import React from 'react';
import styles from './Divider.module.css';

const Divider = ({ title }) => {
  return (
    <section className={styles.divider}>
      <h2>{title}</h2>
    </section>
  );
};

export default Divider; 