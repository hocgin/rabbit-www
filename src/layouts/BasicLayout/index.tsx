import styles from './index.less';
import {Footer, Eggs} from '@hocgin/ui';
import React from "react";
import {Outlet} from 'umi';


const BasicLayout: React.FC<{}> = () => {
  return <div className={styles.normal}>
    <Outlet/>
    <Eggs/>
    <Footer/>
  </div>;
}
export default BasicLayout;
