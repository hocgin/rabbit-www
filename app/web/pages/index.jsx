import React from 'react';
import styles from './index.less';
import {connect} from 'dva';
import {Col, Row} from 'antd';
import {dispatchType} from '@/utils/model';
import HomeModel from '@/models/home';
import {Header} from '@hocgin/ui';
import Counter from '@/components/Counter';
import Product from '@/components/Product';
import ScreenTitle from '@/components/ScreenTitle';
import Slide from '@/components/Slide';

@connect(({global, home, loading, ...rest}) => {
  return {
    website: {
      ...home.website,
    },
  };
}, dispatch => ({
  $getWebsiteConfig: (args = {}) => dispatch({type: dispatchType(HomeModel, HomeModel.effects.getWebsiteConfig), ...args}),
}))
class index extends React.Component {
  static getInitialProps = (async ({store, isServer, history, match, route}) => {
    if (!isServer) {
      return;
    }
    await store.dispatch({type: dispatchType(HomeModel, HomeModel.effects.getWebsiteConfig)});
    const {home} = store.getState();
    return Promise.resolve({
      website: {
        ...home.website,
      },
    });
  });

  state = {};

  componentDidMount() {
    const {$getWebsiteConfig} = this.props;
    $getWebsiteConfig();
  };

  render() {
    let {website} = this.props;
    let gutter = {xs: 2};
    return (<div className={styles.page}>
      <section className={styles.topSection}>
        <Header menus={[
          {href: 'https://www.hocgin.top', title: '首页'},
          {href: 'https://nes.hocgin.top', title: '🎮 游戏机'}]}/>
        <Slide slide={website?.slide}/>
      </section>
      {/*数据指标*/}
      <section className={styles.counterupContainer}>
        <Row className={styles.containerWrapper} gutter={gutter}>
          {((website?.analysis || []).map(({title, count, icon, color, backgroundColor}, index) => (
            <Col key={index} xs={24} sm={6}>
              <Counter title={title} count={count} icon={icon} color={color} backgroundColor={backgroundColor}/>
            </Col>)))}
        </Row>
      </section>
      {/*产品 服务*/}
      <section className={styles.productContainer}>
        <ScreenTitle icon='🥰'>我们的服务</ScreenTitle>
        <Row className={styles.containerWrapper}>
          {(website?.project || []).map(({title, remark, icon, color, backgroundColor}, index) => (
            <Col key={index} xs={24} sm={6} className={styles.product}>
              <Product title={title} remark={remark} icon={icon} color={color} backgroundColor={backgroundColor}/>
            </Col>))}
        </Row>
      </section>
    </div>);
  }

}

export default index;
