import React, { Component } from 'react'
import { Row, Col, Modal, Menu, Dropdown, Icon, message } from 'antd'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import Texty from 'rc-texty'
import worksListStyle from 'asset/css/module/worksList.css'
import GIFImg from 'asset/images/GIF.png'
import VideoImg from 'asset/images/Video.png'
import MultipleImg from 'asset/images/Multiple.png'

export default class WorksList extends Component {
  constructor(props) {
    super(props)
    props.getWorks()
    this.toWorkDetailPage = this.toWorkDetailPage.bind(this)
    this.showWorkDetailDialog = this.showWorkDetailDialog.bind(this)
    this.state = {
      testData: 'test',
      activeWork: {},
      isWorkDetailDialogVisible: false,
      classifies: [
        {
          type: 'all',
          value: '全部'
        },
        {
          type: 'UI',
          value: 'UI'
        },
        {
          type: 'webPage',
          value: '网页'
        },
        {
          type: 'illustration',
          value: '插画'
        },
        {
          type: 'grafic',
          value: '平面'
        },
        {
          type: 'photography',
          value: '摄影'
        },
        {
          type: 'other',
          value: '其他'
        }
      ],
      worksState: props.works
    }
  }
  componentDidMount() {
    this.props.getWorks()
  }

  toWorkDetailPage(workDetail) {
    window.open('/detail?id=' + workDetail.id)
  }
  showWorkDetailDialog() {
    this.setState({
      isWorkDetailDialogVisible: true
    })
  }
  showWorkDetail(workDetail) {
    this.setState({
      activeWork: workDetail
    })
    let { type } = workDetail
    if (type === 'multiple') {
      this.toWorkDetailPage(workDetail)
      return
    }
    this.showWorkDetailDialog()
  }
  hideWorkDetailDialog() {
    this.setState({
      isWorkDetailDialogVisible: false
    })
  }
  clickMenu() {
    message.info('分类功能开发中')
  }

  render() {
    const classifiesList = this.state.classifies.map(({ type, value }) => {
      return <li key={type}>{value}</li>
    })
    function WorkCover(props) {
      let { type, classProp } = props
      let resultClassName = classProp || worksListStyle.worksType
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
    function WorkLabel(props) {
      let { labelType } = props
      if (labelType === 'new') {
        return <span className={worksListStyle.newLabel}><span>New</span></span>
      }
      else if (labelType === 'top') {
        return <span className={worksListStyle.topLabel}><span>Top</span></span>
      }
      else {
        return <span></span>
      }
    }
    const worksListDom = this.props.works.map((workDetail, index) => {
      let { type, title, info, id, coverImg, labelType } = workDetail
      return (
        <Col
          className={worksListStyle.worksItem}
          xs={12}
          sm={6}
          key={id}
          onClick={this.showWorkDetail.bind(this, workDetail)}
        >
          <TweenOne
            className={worksListStyle.worksItemAnim}
            animation={[
              {
                delay: 2800 + (index - 1) * 300,
                duration: 800,
                top: 40,
                opacity: 0,
                type: 'from',
                ease: 'easeOutSine'
              }
            ]}
          >
            <div className={worksListStyle.worksCover}>
              <img
                className={worksListStyle.coverImg}
                src={coverImg}
                alt=""
              />
              <WorkLabel labelType={labelType}></WorkLabel>
              {/* <WorkCover type={type}></WorkCover> */}
            </div>
            <div title={title} className={worksListStyle.worksTitle}>
              {title}
            </div>
            <div className={worksListStyle.worksInfo}>{info}</div>
          </TweenOne>
        </Col>
      )
    })
    const menu = mode => (
      <Menu mode={mode || 'vertical'} onClick={this.clickMenu}>
        {this.state.classifies.map(menuItem => {
          return <Menu.Item key={menuItem.type}>{menuItem.value}</Menu.Item>
        })}
      </Menu>
    )
    return (
      <div className={worksListStyle.worksList}>
        <div className={worksListStyle.combineBox} key="WorksAppComp3">
          <div className={worksListStyle.combine}>
            <TweenOne
              animation={[
                {
                  delay: 3400,
                  duration: 800,
                  opacity: 0,
                  type: 'from',
                  ease: 'easeOutSine'
                }
              ]}
            >
              <Dropdown overlay={menu} trigger={['click']}>
                <a href="#">
                  全部 <Icon type="down" />
                </a>
              </Dropdown>
              <div
                className={`${worksListStyle.classifiesList} ${worksListStyle.menuHideXs}`}
              >
                {menu('horizontal')}
              </div>
              <ul className={worksListStyle.classifiesList}>
                <li>|</li>
                <li>新作</li>
                <li>旧品</li>
              </ul>
            </TweenOne>
            <TweenOne
              className={worksListStyle.combineBar}
              animation={[
                {
                  delay: 2600,
                  duration: 800,
                  left: 0,
                  right: '100%',
                  type: 'from',
                  ease: 'easeOutSine'
                },
                {
                  duration: 1000,
                  left: '100%',
                  right: 0,
                  type: 'to',
                  ease: 'easeInOutExpo'
                }
              ]}
            />
          </div>
        </div>
        <Row className={worksListStyle.worksBoxList} gutter={16}>
          {worksListDom}
        </Row>
        <Modal
          width={864}
          wrapClassName={worksListStyle.detailModal}
          title={
            <div>
              {this.state.activeWork.title}
              {/* <WorkCover
                type={this.state.activeWork.type}
                classProp={worksListStyle.detailModalType}
              ></WorkCover> */}
            </div>
          }
          visible={this.state.isWorkDetailDialogVisible}
          footer={null}
          onCancel={this.hideWorkDetailDialog.bind(this)}
          destroyOnClose={true}
        >
          <div className="info">{this.state.activeWork.info}</div>
          <img className="preview" src={this.state.activeWork.coverImg} alt="" />
        </Modal>
      </div>
    )
  }
}
