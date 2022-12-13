import React from 'react';
import styles from './index.less';
import Counter from '@/components/Counter';
import Product from '@/components/Product';
import ScreenTitle from '@/components/ScreenTitle';
import Slide from '@/components/Slide';
import {Col, Row} from 'antd';
import WebsiteConfig from '@/services/website';
import {Header} from '@hocgin/ui';


export default function () {
  const website = WebsiteConfig
  return (<div className={styles.page}>
    <section className={styles.topSection}>
      <Header menus={[
        {label: <a href={'https://www.hocgin.top'}>首页</a>},
        {label: <a href={'https://nes.hocgin.top'}>🎮 游戏机</a>}
      ]}/>
      <Slide slide={website?.slide}/>
    </section>
    {/*数据指标*/}
    {website?.analysis?.length > 0 ? <section className={styles.counterupContainer}>
      <Row className={styles.containerWrapper} gutter={{xs: 2}}>
        {((website?.analysis || []).map(({title, count, icon, color, backgroundColor}, index) => (
          <Col key={`${index}`} xs={24} sm={6}>
            <Counter title={title} count={count}
                     icon={icon} color={color} backgroundColor={backgroundColor}/>
          </Col>)))}
      </Row>
    </section> : null}
    {/*产品/服务*/}
    <section className={styles.productContainer}>
      <ScreenTitle icon='🥰'>我们的服务</ScreenTitle>
      <Row className={styles.containerWrapper}>
        {(website?.project || []).map(({title, remark, icon, color, backgroundColor}, index) => (
          <Col key={`${index}`} xs={24} sm={6} className={styles.product}>
            <Product title={title} remark={remark} icon={icon}
                     color={color} backgroundColor={backgroundColor}/>
          </Col>))}
      </Row>
    </section>
  </div>);
};
