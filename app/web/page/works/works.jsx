import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import worksApp from '../../reducers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorksList from '@/components/WorksList'
import worksPageStyle from "@/asset/css/module/worksPage.css"
let store = createStore(worksApp)
export default class Works extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header></Header>
                <h1 className={worksPageStyle.title}>设计是一场永无止境的修行</h1>
                <p className={worksPageStyle.info}>蔡小民 - UI设计&插画</p>
                <WorksList></WorksList>
                <Footer></Footer>
            </Provider>
        )
    }
}