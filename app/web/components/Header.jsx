import React, { Component } from 'react'
import { Row, Col, Drawer, Button } from 'antd';
import LogoImg from 'asset/images/logo.png'
import PersonImg from 'asset/images/person.png'
import headerStyles from 'asset/css/module/header.css'
import { init } from '../lib/eyeCanvas'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
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
    const getButtonDom = function (visible) {
      if (visible) {
        return <Button icon="close" onClick={this.onClose}></Button>
      }
      else {
        return <Button icon="menu" onClick={this.showDrawer}></Button>
      }
    }
    const buttonDom = this.state.visible ? (<Button icon="close" onClick={this.onClose}></Button>) : (<Button icon="close" onClick={this.onClose}></Button>)
    return (
      <div>
        <Row className={headerStyles.headerRow}>
          <Col xs={8} sm={8}>
            <img className={headerStyles.logo} src={LogoImg} alt="Chiyuu" />
          </Col>
          <Col xs={8} sm={8} className={headerStyles.personImgCol}>
            <canvas className={headerStyles.canvas}></canvas>
          </Col>
          <Col xs={0} sm={0} md={8} className={headerStyles.linksCol}>
            <a href='/works'>作品</a>
            <a href='/about'>关于</a>
          </Col>
          <Col xs={8} sm={8} md={0} className={headerStyles.drawerCol}>
            {
              this.state.visible ? (<Button icon="close" onClick={this.onClose}></Button>) : (<Button icon="menu" className={headerStyles.memuBtn} onClick={this.showDrawer}></Button>)
            }
          </Col>
        </Row>
        <Drawer
          title="Basic Drawer"
          placement="top"
          style={{ top: this.state.visible ? "100px" : 0 }}
          height="100vh"
          closable={false}
          mask={false}
          visible={this.state.visible}
        >
          <div className={headerStyles.drawerMenuItem}>
            <a href='/works'>作品</a>
            <br/>
            <span>Works</span>
          </div>
          <div className={headerStyles.drawerMenuItem}>
              <a href='/about'>关于</a>
              <br/>
              <span>About</span>
          </div>
        </Drawer>
      </div>
    )
  }
}