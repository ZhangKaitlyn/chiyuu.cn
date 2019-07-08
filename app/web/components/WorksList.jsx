import React, { Component } from 'react'
import { Row, Col } from 'antd';
import worksListStyle from 'asset/css/module/worksList.css'
import WorksCoverImg from 'asset/images/work_1.png'
import GIFImg from 'asset/images/GIF.png'
import VideoImg from 'asset/images/Video.png'
import MultipleImg from 'asset/images/Multiple.png'

export default class WorksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: 'test',
            classifies: [{
                type: 'all',
                value: '全部'
            }, {
                type: 'UI',
                value: 'UI'
            }, {
                type: 'webPage',
                value: '网页'
            }, {
                type: 'icon',
                value: '图标'
            }, {
                type: 'illustration',
                value: '插画'
            }, {
                type: 'grafic',
                value: '平面'
            }, {
                type: 'photography',
                value: '摄影'
            }],
            works: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => {
                return {
                    id: index,
                    type: ['gif', 'multiple', 'video', 'image'][getRandomInt(4)],
                    title: 'Hello Dribble' + index,
                    info: 'UI - 概念' + index
                }
            })
        };

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
    }

    render() {
        const classifiesList = this.state.classifies.map(({ type, value }) => {
            return <li key={type}>{value}</li>
        })
        function WorkCover(props) {
            let type = props.type
            console.log(type)
            if (type == 'gif') {
                return <img className={worksListStyle.worksType} src={GIFImg} alt="" />
            }
            else if (type == 'multiple') {
                return <img className={worksListStyle.worksType} src={MultipleImg} alt="" />
            }
            else if (type == 'video') {
                return <img className={worksListStyle.worksType} src={VideoImg} alt="" />
            }
            else {
                return <span></span>

            }
        }
        const worksListDom = this.state.works.map(({ type, title, info, index }) => {
            return (
                <Col className={worksListStyle.worksItem} span={6} key={index}>
                    <div className={worksListStyle.worksCover}>
                        <img className={worksListStyle.coverImg} src={WorksCoverImg} alt="" />
                        <WorkCover type={type}></WorkCover>
                    </div>
                    <div className={worksListStyle.worksTitle}>{title}---{type}</div>
                    <div className={worksListStyle.worksInfo}>{info}</div>
                </Col>
            )
        })
        return (
            <div className={worksListStyle.worksList}>
                <ul className={worksListStyle.classifiesList}>
                    {classifiesList}
                    <li>|</li>
                    <li>新作</li>
                    <li>旧品</li>
                </ul>
                <Row className={worksListStyle.worksBoxList} gutter={16}>{worksListDom}</Row>
            </div>
        )
    }
}