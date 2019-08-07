import React, { Component } from 'react'
import { Row, Col } from 'antd';
import LogoImg from 'asset/images/logo.png'
import PersonImg from 'asset/images/person.png'
import headerStyles from 'asset/css/module/header.css'
import { init } from '../lib/eyeCanvas'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    init()
  }
  render() {
    return (
      <Row className={headerStyles.headerRow}>
        <Col span={8}>
          <img src={LogoImg} alt="Chiyuu" />
        </Col>
        <Col span={8} className={headerStyles.personImgCol}>
          <canvas className={headerStyles.canvas}></canvas>
        </Col>
        <Col span={8} className={headerStyles.linksCol}>
          <a href='/works'>作品</a>
          <a href='/about'>关于</a>
        </Col>
      </Row>
    )
  }
}