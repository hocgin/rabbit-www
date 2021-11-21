import React from 'react';
import styles from './index.less';
import { Statistic } from 'antd';

class Index extends React.PureComponent {
  render() {
    let { title, count, icon, color, backgroundColor } = this.props;
    return (
      <div className={styles.component}>
        <div className={styles.icon} style={{ color, backgroundColor }}>{icon}</div>
        <div className={styles.content}>
          <div><h3 className={styles.number}><Statistic valueStyle={{ color }} loading={false} value={count}
                                                        suffix={'+'} /></h3></div>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    );
  }
}

export default Index;
