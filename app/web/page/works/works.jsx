import React, { Component } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorksList from '@/components/WorksList'

export default class Works extends Component {
    render() {
        return (
            <div className="works-page">
                <Header></Header>
                <WorksList></WorksList>
                <Footer></Footer>
        </div>
        )
    }
}