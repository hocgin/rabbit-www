import styles from './index.less';
import GinFooter from '@hocgin/gin-footer';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
      <GinFooter/>
    </div>
  );
}

export default BasicLayout;
