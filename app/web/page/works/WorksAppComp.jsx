import React, { Component } from 'react'
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
        <TweenOne
          className={worksPageStyle.leftBlackBg}
          animation={[
            { delay: 1300, duration: 800, right: '100%', type: 'to', ease: 'easeOutQuad' }
          ]}
        />
        <TweenOne className={worksPageStyle.rightBlackBg}
          animation={[
            { delay: 1300, duration: 800, left: '100%', type: 'to', ease: 'easeOutQuad' }
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
            { delay: 200, duration: 300, top: '100%', type: 'from', ease: 'easeInOutSine' },
            { duration: 150, opacity: 0, type: 'to' }
          ]}
        />
        <TweenOne
          className={worksPageStyle.line2}
          animation={[
            { delay: 500, duration: 700, top: '100%', type: 'from', ease: 'easeOutQuad' },
            { duration: 100, opacity: 0, type: 'to' }
          ]}
        />
        <Header />
        <div className={`${worksPageStyle.marginTopAndBottom} ${worksPageStyle.combineBox}`}>
          <div className={worksPageStyle.combine}>
            <Texty
              className={worksPageStyle.title}
              delay={1300}
              duration={1000}
            >
              设计是一场永无止境的修行
            </Texty>
            <TweenOne
              className={worksPageStyle.combineBar}
              animation={[
                { delay: 1300, duration: 800, width: 0, x: 0, type: 'from', ease: 'easeOutSine' },
                { duration: 1000, width: 0, x: 480, type: 'to', ease: 'easeInOutExpo' }
              ]}
            />
          </div>
        </div>
        <div className={`${worksPageStyle.marginBottom64} ${worksPageStyle.combineBox}`}>
          <div className={worksPageStyle.combine}>
            <Texty
              className={worksPageStyle.info}
              delay={1300}
              duration={1000}
            >
              蔡小民 - UI设计&插画
            </Texty>
            <TweenOne
              className={worksPageStyle.combineBar}
              animation={[
                { delay: 1300, duration: 800, width: 0, x: 0, type: 'from', ease: 'easeOutSine' },
                { duration: 1000, width: 0, x: 155, type: 'to', ease: 'easeInOutExpo' }
              ]}
            />
          </div>
        </div>
        <WorksList />
        <Footer />
      </div>
    )
  }
}
