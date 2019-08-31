import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import Texty from 'rc-texty';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorksList from '@/containers/works'
import worksPageStyle from '@/asset/css/module/worksPage.css'
import LogoImg from 'asset/images/logo.png'

export default class WorksAppComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        <QueueAnim>
          <TweenOne
            className={worksPageStyle.leftBlackBg}
            animation={[
              { delay: 1100, duration: 800, right: '100%', type: 'to', ease: 'easeOutQuad' }
            ]}
          />
          <TweenOne className={worksPageStyle.rightBlackBg}
            animation={[
              { delay: 1100, duration: 800, left: '100%', type: 'to', ease: 'easeOutQuad' }
            ]}
          />
          <TweenOne className={worksPageStyle.fixedLogo}
            animation={[
              { delay: 200, duration: 150, opacity: 100, type: 'from' },
              { duration: 150, opacity: 0, type: 'from', ease: 'easeInOutSine' },
              { duration: 200, opacity: 0, top: '30%', type: 'to', ease: 'easeInOutSine' },
            ]}
          >
            <div>Chiyuu.</div>
          </TweenOne>
          <TweenOne
            className={worksPageStyle.line1}
            animation={[
              { delay:200,duration: 300, top: '100%', type: 'from', ease: 'easeInOutSine' },
              { duration: 150, opacity: 0, type: 'to' }
            ]}
          />
          <TweenOne
            className={worksPageStyle.line2}
            animation={[
              { delay:500, duration: 800, top: '100%', type: 'from', ease: 'easeOutQuad' }
            ]}
          />
        </QueueAnim>
        <QueueAnim delay={1100}>
          <Header key='WorksAppComp1' />
          <div className={`${worksPageStyle.marginTopAndBottom} ${worksPageStyle.combineBox}`} key='WorksAppComp2'>
            <div className={worksPageStyle.combine}>
              <Texty
                className={worksPageStyle.title}
                delay={10}
                duration={500}
              >
                设计是一场永无止境的修行
            </Texty>
              <TweenOne
                className={worksPageStyle.combineBar}
                animation={[{ duration: 500, width: 0, x: 0, type: 'from', ease: 'easeInOutExpo' }, { duration: 500, width: 0, x: 480, type: 'to', ease: 'easeInOutExpo' }]}
              />
            </div>
          </div>
          <div className={`${worksPageStyle.marginBottom64} ${worksPageStyle.combineBox}`} key='WorksAppComp3'>
            <div className={worksPageStyle.combine}>
              <Texty
                className={worksPageStyle.info}
                delay={10}
                duration={500}
              >
                蔡小民 - UI设计&插画
            </Texty>
              <TweenOne
                className={worksPageStyle.combineBar}
                animation={[{ duration: 500, width: 0, x: 0, type: 'from', ease: 'easeInOutExpo' }, { duration: 500, width: 0, x: 155, type: 'to', ease: 'easeInOutExpo' }]}
              />
            </div>
          </div>
          <WorksList key='WorksAppComp4' />
          <Footer key='WorksAppComp5' />
        </QueueAnim>
      </div>
    )
  }
}
