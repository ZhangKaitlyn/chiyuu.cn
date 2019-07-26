import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import worksApp from '../../reducers'
import DetailAppComp from './DetailAppComp'

let store = createStore(worksApp)
export default class Works extends Component {
  render() {
    return (
      <Provider store={store}>
        <DetailAppComp />
      </Provider>
    )
  }
}
