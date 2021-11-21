import React from 'react';
import styles from './index.less';
import Scrollable from '@/components/Scrollable';
import { Button, Carousel, Col, Row } from 'antd';

class Index extends React.PureComponent {
  render() {
    let { slide } = this.props;
    return (<div className={styles.component}>
      <Row>
        <Col sm={12} xs={24}>
          <div className={styles.slideLeft}>
            <div className={styles.leftShape} />
            <Carousel dots={false} autoplay style={{ width: '100%' }}>
              {(slide || [1]).map(({ title, subTitle, remark, actions, images }, index) => (<div key={`${index}`}>
                <div key={index} className={styles.carouselRow}>
                  <h2 className={styles.title}>{title}</h2>
                  <span className={styles.subTitle}>{subTitle}</span>
                  <div className={styles.remark}>{remark}</div>
                  <div key={`${index}`} className={styles.actions}>
                    {(actions || []).map(({ icon, title, href }, index) => (
                      <Button key={index} className={styles.btn} type='primary' href={href}>{icon}{title}</Button>))}
                  </div>
                  {images?.length > 0 ? <Scrollable datasource={images} /> : null}
                </div>
              </div>))}
            </Carousel>
          </div>
        </Col>
        <Col sm={12} xs={0}>
          <div className={styles.slideRight}>
            <img className={styles.planet} src='http://cdn.hocgin.top/uPic/planet.png' alt='planet' />
            <div className={styles.rippleBlue} />
            <div className={styles.rippleYellow} />
            <img className={styles.tree} src='http://cdn.hocgin.top/uPic/tree.png' alt='tree' />
            <img className={styles.slide} src='http://cdn.hocgin.top/uPic/hero_silde.png' alt='slide' />
            <div className={styles.slideBg} />
          </div>
        </Col>
      </Row>
    </div>);
  }
}

export default Index;
