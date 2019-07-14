import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import aboutPageStyle from "@/asset/css/module/aboutPage.css"
import aboutPic from 'asset/images/about_pic.png'

export default class About extends Component {
  render() {
    return (
      <div className={aboutPageStyle.aboutPage}>
        <Header></Header>
        <Row className={aboutPageStyle.content}>
          <Col span={12} className={aboutPageStyle.imgZone}><img src={aboutPic} alt="" /></Col>
          <Col span={12} className={aboutPageStyle.infoZone}>
            <h1 className={aboutPageStyle.pageTitle}>蔡小民 Chiyu</h1>
            <div className={aboutPageStyle.item}>
              <div className={aboutPageStyle.itemTitle}>履历</div>
              <div className={aboutPageStyle.infoItem}>
                <div className={aboutPageStyle.infoTitle}>
                  <div className={aboutPageStyle.flexLeft}>
                    深圳市大富网络技术有限公司{' '}UI设计师
                  </div>
                  <span className={aboutPageStyle.time}>2018.3 - 至今</span>
                </div>
                <div className={aboutPageStyle.intro}>
                  负责公司网站视觉和体验优化和迭代，参与并主导知识引擎app的设计
                </div>
              </div>
              <div className={aboutPageStyle.infoItem}>
                <div className={aboutPageStyle.infoTitle}>
                  <div className={aboutPageStyle.flexLeft}>
                    深圳市一米互动科技有限公司{' '}UI设计师
                  </div>
                  <span className={aboutPageStyle.time}>2017.6-2018.3</span>
                </div>
                <div className={aboutPageStyle.intro}>
                  负责公司所有的设计工作，app、小程序、网站、品牌等
                </div>
              </div>
            </div>
            <div className={aboutPageStyle.item}>
              <div className={aboutPageStyle.itemTitle}>教育</div>
              <div className={aboutPageStyle.infoItem}>
                <div className={aboutPageStyle.infoTitle}>
                  <div className={aboutPageStyle.flexLeft}>
                    武汉工程大学
                  </div>
                  <span className={aboutPageStyle.time}>2013.9 - 2017.6</span>
                </div>
                <div className={aboutPageStyle.intro}>
                  2013年考入武汉工程大学艺术设计学院视觉传达专业
                </div>
              </div>
              <div className={aboutPageStyle.infoItem}>
                <div className={aboutPageStyle.infoTitle}>
                  <div className={aboutPageStyle.flexLeft}>
                    三峡艺术高中
                  </div>
                  <span className={aboutPageStyle.time}>2010.9 - 2013.6</span>
                </div>
                <div className={aboutPageStyle.intro}>
                  3年艺术生涯是我们为梦想拼搏奋斗、难以忘怀的时光
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Footer></Footer>
      </div >
    )
  }
}
