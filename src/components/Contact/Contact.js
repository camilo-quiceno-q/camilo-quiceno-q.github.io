import React from 'react';
import styles from './Contact.module.css';

const ContactButton = ({ icon, text, isClickable, href }) => {
  const content = (
    <div className={styles.contactButton}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );

  if (isClickable && href) {
    return (
      <a href={href} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const Contact = ({ contact }) => {
  if (!contact) {
    return <div className={styles.noData}>No contact information available.</div>;
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactGrid}>
        <div className={styles.titleColumn}>
          <h2 className={styles.contactTitle}>{contact.title}</h2>
        </div>
        <div className={styles.buttonsGrid}>
          {contact.buttons && contact.buttons.map((button, index) => (
            <ContactButton 
              key={index}
              icon={button.icon}
              text={button.text}
              isClickable={button.isClickable}
              href={button.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact; 