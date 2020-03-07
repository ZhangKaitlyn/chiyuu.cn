import React, { Component } from 'react'
import { Tooltip } from 'antd'
import footerStyle from 'asset/css/module/footer.css'

export default class Footer extends Component {
    render() {
        const iconsListTitles = ['迟語', 'chiyuu', '蔡小民明铭', 'mmm1220i', '374631450@qq.com']
        const iconsListDom = iconsListTitles.map((title, index) => {
            const positionSpace = -32 * index + 'px'
            const marginSpace = index > 0 ? '32px' : 0
            return <Tooltip key={index} title={title} overlayClassName={footerStyle.tooltipContainer}>
                <div className={footerStyle.icon} style={{ 'backgroundPosition': positionSpace, 'marginLeft': marginSpace }}></div>
            </Tooltip >
        })
        return (
            <div className={footerStyle.footerComp} >
                <div className={footerStyle.contactRow}>
                    {iconsListDom}
                </div>
                <div className={footerStyle.recordNoRow}>鄂ICP备18001822号-1</div>
                <div>&copy; 2019 Chiyu. 特别感谢 @ZhangKaitlyn</div>
            </div >
        )
    }
}