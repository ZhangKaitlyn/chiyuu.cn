import React, { Component } from 'react'
import Header from '@/components/backend/Header'
import Footer from '@/components/backend/Footer'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header pageName="登录" />
        <Footer />
      </div>
    )
  }
}
