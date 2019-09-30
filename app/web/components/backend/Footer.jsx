import React, { Component } from 'react'
import footerStyle from 'asset/css/module/backendFooter.css'

export default class Footer extends Component {
  render() {
    return (
      < div className={footerStyle.footerComp}>
        <div className={footerStyle.recordNoRow}>鄂ICP备18001822号-1</div>
        <div>&copy; 2019 Chiyu. 特别感谢 @ZhangKaitlyn</div>
      </div >
    )
  }
}