import React, { Component } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorksList from '@/components/WorksList'
import worksPageStyle from "@/asset/css/module/worksPage.css"

export default class Works extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <h1 className={worksPageStyle.title}>设计是一场永无止境的修行</h1>
                <p className={worksPageStyle.info}>蔡小民 - UI设计&插画</p>
                <WorksList></WorksList>
                <Footer></Footer>
            </div>
        )
    }
}