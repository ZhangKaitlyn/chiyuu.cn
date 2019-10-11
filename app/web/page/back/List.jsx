import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Header from '@/components/backend/Header'
import Footer from '@/components/backend/Footer'
import listStyle from 'asset/css/module/backendList.css'
import axios from 'axios'
import WorksCoverImg from 'asset/images/work_1.png'
import GIFImg from 'asset/images/GIF.png'
import VideoImg from 'asset/images/Video.png'
import MultipleImg from 'asset/images/Multiple.png'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      works: []
    }
  }
  async componentDidMount() {
    try {
      let result = await axios.get('/api/works')
      this.setState({
        works: result.data
      })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    function WorkCover(props) {
      let { type, classProp } = props
      let resultClassName = classProp || listStyle.worksType
      console.log(classProp, '---', resultClassName)
      if (type == 'gif') {
        return <img className={resultClassName} src={GIFImg} alt="" />
      } else if (type == 'multiple') {
        return <img className={resultClassName} src={MultipleImg} alt="" />
      } else if (type == 'video') {
        return <img className={resultClassName} src={VideoImg} alt="" />
      } else {
        return <span></span>
      }
    }
    const worksList = this.state.works.map((workDetail, index) => {
      let { title, cover, type, info } = workDetail
      return (
        <Col className={listStyle.worksItem} xs={12} sm={6} key={index}>
          <div className={listStyle.worksCover}>
            <img className={listStyle.coverImg} src={cover} alt="" />
            <WorkCover type={type}></WorkCover>
          </div>
          <div className={listStyle.worksTitle} title={title}>
            {title}
          </div>
          <div className={listStyle.worksInfo}>{info}</div>
        </Col>
      )
    })
    return (
      <div>
        <Header pageName="作品管理" />
        <Row className={listStyle.listBox} gutter={16}>{worksList}</Row>
        <Footer />
      </div>
    )
  }
}
