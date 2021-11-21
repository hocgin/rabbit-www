import React from 'react';
import styles from './index.less';
import Scrollable from '@/components/Scrollable';
import { Icon } from '@ant-design/compatible';

import { Avatar, Tooltip } from 'antd';

class Index extends React.PureComponent {

  render() {
    let { title, subTitle, remark, logoUrl, href, tags, actions, follower, images, badge } = this.props;

    let IconButton = ({ href, type, text }) => {
      return (
        <Tooltip placement='top' text={text}>
          <a href={href} style={{ color: 'unset' }}>
            <Icon className={styles.action} type={type} />
          </a>
        </Tooltip>
      );
    };
    return (<div className={styles.component}>
      <div className={styles.info}>
        <h2 className={styles.title}>
          <a href={href}>
            <Avatar className={styles.logo} icon={<Icon type='project' />} src={logoUrl} />
            {title}
          </a>
          {badge?.title && <span className={styles.flag}>{badge?.title}</span>}
        </h2>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.desc}>{remark}</div>
        <div className={styles.actionWrapper}>
          {(actions?.list || []).map(({ type, text, href },index) => (
            <IconButton key={index} className={styles.action} href={href}
                        type={type} text={text} />))}
          {follower?.number > 0 && <div className={styles.followers}>
            <span className={styles.followerNumber}>{follower?.number}</span>
            <span>{follower?.title}</span>
          </div>}
        </div>
        <div className={styles.tagWrapper}>
          {(tags || []).join('、')}
        </div>
      </div>
      <div className={styles.scrollView}>
        <Scrollable datasource={images} />
      </div>
    </div>);
  }


}

export default Index;
