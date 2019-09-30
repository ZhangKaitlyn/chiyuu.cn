import React, { Component } from 'react'
import Header from '@/components/backend/Header'
import Footer from '@/components/backend/Footer'
import axios from 'axios'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      works: []
    }
  }
  async componentDidMount() {
    try {
      this.setState({
        works: await axios.get('/api/works')
      })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (
      <div>
        <Header pageName="作品管理" />
        <Footer />
      </div>
    )
  }
}
