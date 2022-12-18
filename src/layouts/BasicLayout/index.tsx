import styles from './index.less';
import {Footer, Eggs} from '@hocgin/ui';
import { default as theme } from '@/theme';
import React from "react";
import {ConfigProvider} from 'antd';


const BasicLayout: React.FC<{ children: any }> = ({children}) => {
  return <ConfigProvider theme={{token: theme}}>
    <div className={styles.normal}>
      {children}
      <Eggs/>
      <Footer/>
    </div>
  </ConfigProvider>;
}
export default BasicLayout;
