import React, { Component } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import detailPageStyle from "@/asset/css/module/detailPage.css"

export default class About extends Component {
    render() {
        return (
          <div>
              <Header></Header>
              <div>Keepwork</div>
              <Footer></Footer>
          </div>
      )
    }
}