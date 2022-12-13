import React from 'react';
import styles from './index.less';
import Scrollable from '@/components/Scrollable';
import {Icon} from '@ant-design/compatible';

import {Avatar, Tooltip} from 'antd';

export default function ({title, subTitle, remark, logoUrl, href, tags, actions, follower, images, badge}: any) {
  let IconButton = ({href, type, text}: any) => {
    return (
      <Tooltip placement='top' title={text}>
        <a href={href} style={{color: 'unset'}}>
          {/*@ts-ignore*/}
          <Icon className={styles.action} type={type}/>
        </a>
      </Tooltip>
    );
  };
  return (<div className={styles.component}>
    <div className={styles.info}>
      <h2 className={styles.title}>
        <a href={href}>
          {/*@ts-ignore*/}
          <Avatar className={styles.logo} icon={<Icon type='project'/>} src={logoUrl}/>
          {title}
        </a>
        {badge?.title && <span className={styles.flag}>{badge?.title}</span>}
      </h2>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.desc}>{remark}</div>
      <div className={styles.actionWrapper}>
        {(actions?.list || []).map(({type, text, href}: any) => (
          <IconButton className={styles.action} href={href}
                      type={type} text={text}/>))}
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
      <Scrollable datasource={images}/>
    </div>
  </div>);
};
