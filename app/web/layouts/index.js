import styles from './index.less';
import { Footer } from '@hocgin/ui';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
      <Footer />
    </div>
  );
}

export default BasicLayout;
