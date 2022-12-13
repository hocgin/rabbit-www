import React from 'react';
import styles from './index.less';
import {Statistic} from 'antd';

export default function ({title, count, icon, color, backgroundColor}:any) {
  return (
    <div className={styles.component}>
      <div className={styles.icon} style={{color, backgroundColor}}>{icon}</div>
      <div className={styles.content}>
        <div><h3 className={styles.number}><Statistic valueStyle={{color}} loading={false} value={count}
                                                      suffix={'+'}/></h3></div>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};
