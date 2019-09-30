import React, { Component } from 'react'
import Header from '@/components/backend/Header'
import Footer from '@/components/backend/Footer'

export default class List extends Component {
  render() {
    return (
      <div>
        <Header pageName="作品管理" />
        <Footer />
      </div>
    )
  }
}
