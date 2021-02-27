import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import AppsModel from '@/models/apps';
import { dispatchType } from '@/utils/model-utils';
import classnames from 'classnames';

@connect(({ global, apps, loading, ...rest }) => {
  return {
    paging: apps?.paging,
    pagingLoading: loading.effects[dispatchType(AppsModel, AppsModel.effects.worked)],
  };
}, dispatch => ({
  $worked: (args = {}) => dispatch({ type: dispatchType(AppsModel, AppsModel.effects.worked), ...args }),
}))
class index extends React.Component {

  state = {
    isOpenMenu: false,
    selectedImg: null,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResize);
  }


  render() {
    let {} = this.props;
    let { isOpenMenu, selectedImg } = this.state;
    return (<div className={styles.page}>
      <section className={styles.section}>
        <header>
          <a href='#' className={styles.logo}>HOCGIN<span className={styles.suffix}>.top</span></a>
          <div className={classnames(styles.toggle, {
            [styles.active]: isOpenMenu,
          })} onClick={this.onClickToggle}>{isOpenMenu ? <CloseOutlined /> : <MenuOutlined />}</div>
          <ul className={classnames(styles.navigation, {
            [styles.active]: isOpenMenu,
          })}>
            <li><Link to={'#'}>首页</Link></li>
          </ul>
        </header>
        <div className={styles.container}>
          {[1, 2, 3, 4].map((_, index) => (<div className={styles.box}
                                                style={{ '--i': index }}
                                                onClick={this.onClickSelected.bind(this, index)}>
            <div className={classnames(styles.imgBx, { [styles.active]: selectedImg === index })}>
              <img src={`http://cdn.hocgin.top/uPic/img_${index}.jpg`} alt='' />
            </div>
          </div>))}
        </div>
        <div>
          <h2>🚀 我们都是自己的英雄</h2>
        </div>
      </section>
    </div>);
  }

  onClickSelected = (index) => this.setState(({ selectedImg }) => ({
    selectedImg: selectedImg === index ? null : index,
  }));
  onClickToggle = () => this.setState(({ isOpenMenu }) => ({ isOpenMenu: !isOpenMenu }));
}

export default index;
