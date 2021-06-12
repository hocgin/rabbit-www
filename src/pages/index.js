import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { MenuOutlined, CloseOutlined, RiseOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import Counter from '@/components/Counter';
import Product from '@/components/Product';
import ScreenTitle from '@/components/ScreenTitle';
import Slide from '@/components/Slide';
import AppsModel from '@/models/apps';
import { dispatchType } from '@/utils/model-utils';
import classnames from 'classnames';
import { Col, Row } from 'antd';
import WebsiteConfig from '@/services/website';

@connect(({ global, apps, loading, ...rest }) => {
  return {
    website: {
      ...WebsiteConfig,
    },
  };
}, dispatch => ({
  $worked: (args = {}) => dispatch({ type: dispatchType(AppsModel, AppsModel.effects.worked), ...args }),
}))
class index extends React.Component {

  state = {
    isOpenMenu: false,
  };

  render() {
    let { website } = this.props;
    let { isOpenMenu } = this.state;
    return (<div className={styles.page}>
      <section className={styles.topSection}>
        <header className={styles.topHeader}>
          <a href='#' className={styles.logo}>HOCGIN<span className={styles.suffix}><span
            className={styles.dot}>.</span>top</span></a>
          <div className={classnames(styles.toggle, {
            [styles.active]: isOpenMenu,
          })} onClick={this.onClickToggle}>{isOpenMenu ? <CloseOutlined /> : <MenuOutlined />}</div>
          <ul className={classnames(styles.navigation, {
            [styles.active]: isOpenMenu,
          })}>
            <li><Link to={'#'}>首页</Link></li>
            <li><Link to={'https://nes.hocgin.top/'}>🎮 游戏机</Link></li>
          </ul>
        </header>
        <Slide slide={website?.slide} />
      </section>
      {/*数据指标*/}
      {website?.analysis?.length > 0 ? <section className={styles.counterupContainer}>
        <Row className={styles.containerWrapper} gutter={{ xs: 2 }}>
          {((website?.analysis || []).map(({ title, count, icon, color, backgroundColor }, index) => (
            <Col key={`${index}`} xs={24} sm={6}>
              <Counter title={title} count={count}
                       icon={icon} color={color} backgroundColor={backgroundColor} />
            </Col>)))}
        </Row>
      </section> : null}
      {/*产品/服务*/}
      <section className={styles.productContainer}>
        <ScreenTitle icon='🥰'>我们的服务</ScreenTitle>
        <Row className={styles.containerWrapper}>
          {(website?.project || []).map(({ title, remark, icon, color, backgroundColor }, index) => (
            <Col key={`${index}`} xs={24} sm={6} className={styles.product}>
              <Product title={title} remark={remark} icon={icon}
                       color={color} backgroundColor={backgroundColor} />
            </Col>))}
        </Row>
      </section>
    </div>);
  }

  onClickToggle = () => this.setState(({ isOpenMenu }) => ({ isOpenMenu: !isOpenMenu }));
}

export default index;
