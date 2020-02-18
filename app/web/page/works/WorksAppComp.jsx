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
    this.handleAnimChange = this.handleAnimChange.bind(this)
    this.state = {
      show: true,
      isAnimLoaded: false
    };
  }
  handleAnimChange(params) {
    let mode = params.mode
    console.log(111, params.mode)
    if (mode === 'onComplete') {
      this.setState({
        isAnimLoaded: true
      })
      // this.state.isAnimLoaded = true
    }
  }
  render() {

    return (
      <div>
        <TweenOne
          className={worksPageStyle.leftBlackBg}
          // paused={this.state.isAnimLoaded}
          animation={[
            { delay: 2600, duration: 800, right: '100%', type: 'to', ease: 'easeOutQuad' }
          ]}
        />
        <TweenOne className={worksPageStyle.rightBlackBg}
          animation={[
            { delay: 2600, duration: 800, left: '100%', type: 'to', ease: 'easeOutQuad' }
          ]}
        />
        <TweenOne className={worksPageStyle.fixedLogo}
          animation={[
            { delay: 1200, duration: 450, opacity: 100, type: 'from' },
            { duration: 150, opacity: 0, type: 'from', ease: 'easeInOutSine' },
            { duration: 200, opacity: 0, top: '30%', type: 'to', ease: 'easeInOutSine' }
          ]}
        >
          <div>Chiyuu.</div>
        </TweenOne>
        <TweenOne
          className={worksPageStyle.line1}
          animation={[
            { delay: 1200, duration: 600, top: '100%', type: 'from', ease: 'easeInOutSine' },
            { duration: 150, opacity: 0, type: 'to' }
          ]}
        />
        <TweenOne
          className={worksPageStyle.line2}
          animation={[
            { delay: 1800, duration: 700, top: '100%', type: 'from', ease: 'easeOutQuad' },
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
                { delay: 1300, duration: 800, left: 0, right: '100%', type: 'from', ease: 'easeOutSine' },
                { duration: 1000, left: '100%', right: 0, type: 'to', ease: 'easeInOutExpo' }
              ]}
              onChange={this.handleAnimChange}
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
                { delay: 1300, duration: 800, left: 0, right: '100%', type: 'from', ease: 'easeOutSine' },
                { duration: 1000, left: '100%', right: 0, type: 'to', ease: 'easeInOutExpo' }
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
