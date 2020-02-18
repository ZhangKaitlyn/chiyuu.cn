import React, { Component } from 'react'
import { BackTop } from 'antd'
import MultipleImg from 'asset/images/Multiple.png'
import detailCss from 'asset/css/module/detail.css'


export default class WorksList extends Component {
  constructor(props) {
    super(props)
    this.initWorkDetail = this.initWorkDetail.bind(this)
    this.state = {
      workDetail: { images: [] }
    }
  }
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const workId = urlParams.get('id')
    this.props.getWorks()
    setTimeout(() => {
      this.initWorkDetail(workId)
    })
  }
  initWorkDetail(workId) {
    let works = this.props.works
    for (let index = 0; index < works.length; index++) {
      const workDetail = works[index]
      if (workDetail.id == workId) {
        this.setState({
          workDetail
        })
        break
      }
    }
  }

  render() {
    const coverList = this.state.workDetail.images.map(url => {
      return <img key={url} src={url} alt="" className={detailCss.cover} />
    })
    return (
      <div className={detailCss.container}>
        <BackTop />
        <div className={detailCss.title}>
          {this.state.workDetail.title} <img src={MultipleImg} alt="" />
        </div>
        <div className={detailCss.info}>{this.state.workDetail.info}</div>
        <div>{coverList}</div>
      </div>
    )
  }
}
