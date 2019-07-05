import React, { Component } from 'react'
import footerStyle from 'asset/css/module/footer.css'
import ZcoolImg from 'asset/images/zcool.png'
import QQImg from 'asset/images/QQ.png'
import WeiboImg from 'asset/images/weibo.png'
import WechatImg from 'asset/images/wechat.png'
import EmailImg from 'asset/images/email.png'

export default class Footer extends Component {
    render() {
        return (
            < div className={footerStyle.footerComp}>
                <div className={footerStyle.contactRow}>
                    <img src={ZcoolImg} alt="zcool" />
                    <img src={QQImg} alt="QQ" />
                    <img src={WeiboImg} alt="weibo" />
                    <img src={WechatImg} alt="wechat" />
                    <img src={EmailImg} alt="email" />
                </div>
                <div className={footerStyle.recordNoRow}>鄂ICP备18001822号-1</div>
                <div>&copy; 2019 Chiyu. 特别感谢 @ZhangKaitlyn</div>
            </div >
        )
    }
}