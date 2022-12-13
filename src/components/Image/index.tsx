import React from 'react';
import styles from './index.less';

function getImagePrefix(src: string) {
  let prefix = `${src}`;
  if (prefix.includes('.')) {
    let lastIndex = prefix.lastIndexOf('.');
    prefix = prefix.substr(lastIndex + 1);
  }
  if (prefix.length > 4) {
    prefix = '';
  }
  return prefix.toUpperCase();
}

export default function ({src}: any) {
  let prefix = getImagePrefix(src);
  return (
    <div className={styles.component}>
      <div className={styles.photoShot}>
        <div className={styles.photoImg}>
          <img src={src} className={styles.photo} alt="图片"/>
        </div>
      </div>
      {/*{prefix !== '' && <div className={styles.indicator}>{prefix}</div>}*/}
    </div>
  );
};
