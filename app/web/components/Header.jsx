import React, { Component } from 'react'
import { Row, Col } from 'antd';
import LogoImg from 'asset/images/logo.png'

export default class Header extends Component {
    render() {
        return (
            <Row>
                <Col span={8}>
                    <img src={LogoImg} alt="Chiyuu"/>
                </Col>
                <Col span={8}>
                    Profile Picture
                </Col>
                <Col span={8}>
                    <a href='/works'>作品</a>
                    <a href='/about'>关于</a>
                </Col>
            </Row>
        )
    }
}