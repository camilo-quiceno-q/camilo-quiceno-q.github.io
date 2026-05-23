import React from 'react';
import styles from './EducationTable.module.css';

const TableHeader = () => (
  <thead>
    <tr>
      <th className={styles.headerCell}>Educational Background</th>
      <th className={styles.headerCell}>Place</th>
      <th className={styles.headerCell}>Completion</th>
    </tr>
  </thead>
);

const TableRow = ({ education, index }) => (
  <tr key={index} className={styles.tableRow}>
    <td className={styles.backgroundCell}>{education.background}</td>
    <td className={styles.placeCell}>{education.place}</td>
    <td className={styles.completionCell}>{education.completion}</td>
  </tr>
);

const EducationTable = ({ education }) => {
  if (!education || education.length === 0) {
    return <div className={styles.noData}>No education data available.</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.educationTable}>
        <TableHeader />
        <tbody>
          {education.map((item, index) => (
            <TableRow key={index} education={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EducationTable; 