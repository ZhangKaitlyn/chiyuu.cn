import React, { Component } from 'react'
import {
  message,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Upload,
  Icon,
  DatePicker
} from 'antd'
import Header from '@/components/backend/Header'
import Footer from '@/components/backend/Footer'
import uploadCss from 'asset/css/module/backendUpload.css'
import axios from 'axios'
const IMG_URL = 'http://192.168.137.1:3000/images/'

class UploadComp extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleMultipleChange = this.handleMultipleChange.bind(this)
    this.state = {
      coverUrl: '',
      worksUrl: [],
      loading: false,
      multipleLoading: false
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      console.log(this.state.worksUrl)
      console.log(this.state.coverUrl)
      if (!err) {
        console.log('Received values of form: ', values)
        try {
          await axios.post('/back/work/new', {
            ...values,
            cover: this.state.coverUrl,
            images: this.state.worksUrl
          })
          message.success('上传成功')
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
  getBase64(img, callback) {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }
  handleChange(info) {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      this.setState({
        coverUrl: IMG_URL + info.file.response.filename,
        loading: false
      })
    }
  }
  handleMultipleChange(info) {
    if (info.file.status === 'uploading') {
      this.setState({ multipleLoading: true })
      return
    }
    if (info.file.status === 'done') {
      let worksUrl = this.state.worksUrl
      let newUrl = IMG_URL + info.file.response.filename
      worksUrl.push(newUrl)
      this.setState({
        worksUrl,
        multipleLoading: false
      })
    }
  }
  render() {
    const classifies = [
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
        type: 'icon',
        value: '图标'
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
      }
    ]
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )

    const multipleuploadButton = (
      <div>
        <Icon type={this.state.multipleLoading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div>
        <Header pageName="上传作品" />
        <div className={uploadCss.container}>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="标题">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '请输入标题'
                  }
                ]
              })(<Input placeholder="输入标题" />)}
            </Form.Item>
            <Form.Item label="类型">
              {getFieldDecorator('type', {
                initialValue: 1,
                rules: [
                  {
                    required: true,
                    message: '请选择作品类型'
                  }
                ]
              })(
                <Radio.Group>
                  <Radio value={1}>单图</Radio>
                  <Radio value={2}>Gif</Radio>
                  <Radio value={3}>图集</Radio>
                  <Radio value={4}>视频</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="分类">
              {getFieldDecorator('classify', {
                initialValue: classifies[0].type,
                rules: [
                  {
                    required: true,
                    message: '请选择分类'
                  }
                ]
              })(
                <Select placeholder="请选择">
                  {classifies.map(({ type, value }) => (
                    <Option key={type} value={type}>
                      {value}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="描述">
              {getFieldDecorator('info', {
                rules: [
                  {
                    required: true,
                    message: '请输入描述'
                  }
                ]
              })(<Input placeholder="输入描述" />)}
            </Form.Item>
            <Form.Item label="封面">
              {getFieldDecorator('cover', {
                rules: [
                  {
                    required: true,
                    message: '请选择封面'
                  }
                ]
              })(
                <Upload
                  accept="image/*"
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="/back/uploadImage"
                  onChange={this.handleChange}
                >
                  {this.state.coverUrl ? (
                    <img
                      src={this.state.coverUrl}
                      alt="avatar"
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </Form.Item>
            <Form.Item label="作品">
              {getFieldDecorator('images', {
                rules: [
                  {
                    required: true,
                    message: '请上传作品图片'
                  }
                ]
              })(
                <Upload
                  accept="image/*"
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={{ showRemoveIcon: true }}
                  multiple={true}
                  action="/back/uploadImage"
                  onChange={this.handleMultipleChange}
                >
                  {multipleuploadButton}
                </Upload>
              )}
            </Form.Item>
            <Form.Item label="时间">
              {getFieldDecorator('time', {
                rules: [
                  {
                    required: true,
                    message: '请选择时间'
                  }
                ]
              })(<DatePicker />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Form.create()(UploadComp)
