import React, { Component } from 'react'
import { Tooltip } from 'antd'
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
                    <Tooltip title="迟語" overlayClassName={footerStyle.tooltipContainer}>
                        <img src={ZcoolImg} alt="zcool" />
                    </Tooltip>
                    <Tooltip title="chiyuu" overlayClassName={footerStyle.tooltipContainer}>
                        <img src={QQImg} alt="QQ" />
                    </Tooltip>
                    <Tooltip title="@蔡小民明铭" overlayClassName={footerStyle.tooltipContainer}>
                        <img src={WeiboImg} alt="weibo" />
                    </Tooltip>
                    <Tooltip title="mmm1220i" overlayClassName={footerStyle.tooltipContainer}>
                        <img src={WechatImg} alt="wechat" />
                    </Tooltip>
                    <Tooltip title="374631450@qq.com" overlayClassName={footerStyle.tooltipContainer}>
                        <img src={EmailImg} alt="email" />
                    </Tooltip>
                </div>
                <div className={footerStyle.recordNoRow}>鄂ICP备18001822号-1</div>
                <div>&copy; 2019 Chiyu. 特别感谢 @ZhangKaitlyn</div>
            </div >
        )
    }
}