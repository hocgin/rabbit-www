import React from 'react';
import styles from './index.less';

export default function ({icon, title, children}: any) {
  return (
    <div className={styles.component}>
      <div><h2>{icon ? <span className={styles.icon}>{icon}</span> : null}{children}</h2></div>
    </div>
  );
};
