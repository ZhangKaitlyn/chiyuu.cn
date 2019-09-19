import React, { Component } from 'react'
import { Row, Col, Drawer, Button } from 'antd';
import LogoImg from 'asset/images/logo.png'
import PersonImg from 'asset/images/person.png'
import headerStyles from 'asset/css/module/header.css'
import { init } from '../lib/eyeCanvas'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }
  componentDidMount() {
    init()
  }
  showDrawer() {
    this.setState({
      visible: true,
    })
  }
  onClose() {
    this.setState({
      visible: false,
    })
  }

  render() {
    return (
      <div>
        <Row className={headerStyles.headerRow}>
          <Col span={8}>
            <img src={LogoImg} alt="Chiyuu" />
          </Col>
          <Col span={8} className={headerStyles.personImgCol}>
            <canvas className={headerStyles.canvas}></canvas>
          </Col>
          <Col sm={0} md={8} className={headerStyles.linksCol}>
            <a href='/works'>作品</a>
            <a href='/about'>关于</a>
          </Col>
          <Col sm={8} md={0}>
            <Button icon="menu" onClick={this.showDrawer}></Button>
          </Col>
        </Row>
        <Drawer
          title="Basic Drawer"
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    )
  }
}