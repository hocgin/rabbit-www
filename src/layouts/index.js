import styles from './index.less';
import {Footer, Eggs} from '@hocgin/ui';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
      <Eggs/>
      <Footer/>
    </div>
  );
}

export default BasicLayout;
