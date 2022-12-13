import React from 'react';
import styles from './index.less';
import Image from '@/components/Image';


export default function ({datasource = []}: any) {
  return (
    <ol className={styles.component}>
      {(datasource || []).map(({src}: any) => <li className={styles.item}><Image src={src}/></li>)}
    </ol>
  );
};
