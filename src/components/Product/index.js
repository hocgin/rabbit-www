import React from 'react';
import styles from './index.less';
import { Link } from 'umi';
import { RiseOutlined } from '@ant-design/icons';

class Index extends React.PureComponent {
  render() {
    let { href, title, remark, icon, color, backgroundColor } = this.props;
    return (<div className={styles.component}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon} style={{ color, backgroundColor }}>{icon}</div>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.remark}>{remark}</div>
        {href && <Link className={styles.href} to={href}>了解更多</Link>}
      </div>
    </div>);
  }
}

export default Index;
