import React from 'react';
import styles from './Timeline.module.css';

const TimelineDot = () => (
  <div className={styles.timelineMarker}>
    <div className={styles.timelineDot}></div>
  </div>
);

const PositionHeader = ({ title, date }) => (
  <div className={styles.timelineHeader}>
    <h3 className={styles.timelineTitle}>{title}</h3>
    <span className={styles.timelineDate}>{date}</span>
  </div>
);

const TaskList = ({ tasks }) => (
  <ul className={styles.timelineTasks}>
    {tasks.map((task, index) => (
      <li key={index} className={styles.timelineTask}>
        {task}
      </li>
    ))}
  </ul>
);

const Position = ({ position, index }) => (
  <div key={index} className={styles.timelineItem}>
    <TimelineDot />
    <div className={styles.timelineContent}>
      <PositionHeader title={position.title} date={position.date} />
      <TaskList tasks={position.tasks} />
    </div>
  </div>
);

const Company = ({ company, index }) => (
  <div key={index} className={styles.companySection}>
    <div className={styles.companyHeader}>
      <h2 className={styles.companyTitle}>{company.name}</h2>
    </div>
    {company.positions.map((position, positionIndex) => (
      <Position key={positionIndex} position={position} index={positionIndex} />
    ))}
  </div>
);

const Timeline = ({ companies }) => {
  if (!companies || companies.length === 0) {
    return <div className={styles.timeline}>No experience data available.</div>;
  }

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineContainer}>
        {companies.map((company, index) => (
          <Company key={index} company={company} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline; 