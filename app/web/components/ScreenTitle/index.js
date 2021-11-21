import React from 'react';
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {icon, title, children} = this.props;
    return (<div className={styles.component}>
      <div><h2>{icon ? <span className={styles.icon}>{icon}</span> : null}{children}</h2></div>
    </div>);
  }
}

export default Index;
