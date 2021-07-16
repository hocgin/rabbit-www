import styles from './index.less';
import GinFooter from '@hocgin/gin-footer';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
      <GinFooter/>
      <div className={styles.copytitle}>
        © 2013-2021{' '}
        <a href="http://www.hocgin.top/" target="_blank">
          兔游工作室
        </a>{' '}
        |{' '}
        <a href="https://beian.miit.gov.cn/" target="_blank">
          闽ICP备20004537号
        </a>
      </div>
    </div>
  );
}

export default BasicLayout;
