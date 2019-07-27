import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorksList from '@/containers/works'
import worksPageStyle from '@/asset/css/module/worksPage.css'

export default class WorksAppComp extends Component {
  render() {
    return (
      <QueueAnim>
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
    )
  }
}
