import React, { Component } from 'react'
import { Row, Col, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import worksListStyle from 'asset/css/module/worksList.css'
import WorksCoverImg from 'asset/images/work_1.png'
import GIFImg from 'asset/images/GIF.png'
import VideoImg from 'asset/images/Video.png'
import MultipleImg from 'asset/images/Multiple.png'

export default class WorksList extends Component {

  constructor(props) {
    super(props);
    props.getWorks()
    this.toWorkDetailPage = this.toWorkDetailPage.bind(this);
    this.showWorkDetailDialog = this.showWorkDetailDialog.bind(this);
    this.state = {
      testData: 'test',
      activeWork: {},
      isWorkDetailDialogVisible: false,
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
      worksState: props.works
    };
  }
  componentDidMount() {
    this.props.getWorks()
  }

  toWorkDetailPage() {
    console.log('toWorkDetailPage')
  }
  showWorkDetailDialog() {
    console.log('showWorkDetailDialog')
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
      this.toWorkDetailPage()
      return
    }
    this.showWorkDetailDialog()
  }
  hideWorkDetailDialog() {
    this.setState({
      isWorkDetailDialogVisible: false
    })
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
      }
      else if (type == 'multiple') {
        return <img className={resultClassName} src={MultipleImg} alt="" />
      }
      else if (type == 'video') {
        return <img className={resultClassName} src={VideoImg} alt="" />
      }
      else {
        return <span></span>

      }
    }
    const worksListDom = this.props.works.map((workDetail) => {
      let { type, title, info, id } = workDetail
      return (
        <Col className={worksListStyle.worksItem} span={6} key={id} onClick={this.showWorkDetail.bind(this, workDetail)}>
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
        <div className={worksListStyle.combineBox} key='WorksAppComp3'>
          <div className={worksListStyle.combine}>
            <ul className={worksListStyle.classifiesList}>
              {classifiesList}
              <li>|</li>
              <li>新作</li>
              <li>旧品</li>
            </ul>
            <TweenOne
              className={worksListStyle.combineBar}
              animation={[{ duration: 500, width: 0, x: 0, type: 'from', ease: 'easeInOutExpo' }, { duration: 500, width: 0, x: 675, type: 'to', ease: 'easeInOutExpo' }]}
            />
          </div>
        </div>
        <Row className={worksListStyle.worksBoxList} gutter={16}>
          <QueueAnim duration={1000} interval={500} delay={1000}>{worksListDom}</QueueAnim>
        </Row>
        <Modal
          width={864}
          wrapClassName={worksListStyle.detailModal}
          title={
            <div>{this.state.activeWork.title}
              <WorkCover type={this.state.activeWork.type} classProp={worksListStyle.detailModalType}></WorkCover>
            </div>
          }
          visible={this.state.isWorkDetailDialogVisible}
          footer={null}
          onCancel={this.hideWorkDetailDialog.bind(this)}
          destroyOnClose={true}
        >
          <div className="info">{this.state.activeWork.info}</div>
          <img className="preview" src={WorksCoverImg} alt="" />
        </Modal>
      </div>
    )
  }
}