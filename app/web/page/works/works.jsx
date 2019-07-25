import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import worksApp from '../../reducers'
import WorksAppComp from './WorksAppComp'

let store = createStore(worksApp)
export default class Works extends Component {
  render() {
    return (
      <Provider store={store}>
        <WorksAppComp />
      </Provider>
    )
  }
}
