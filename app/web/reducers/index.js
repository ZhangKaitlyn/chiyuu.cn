import { GET_WORKS } from '../actions'
import works from '@/lib/works'

const initialState = {
  workTypeFilter: 'all',
  works: []
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function worksApp(state = initialState, action) {
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  console.log(action.type)
  switch (action.type) {
  case GET_WORKS:
    return Object.assign({}, state, {
      works: works
      // works: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
      //   index => {
      //     return {
      //       id: index,
      //       type: ['gif', 'multiple', 'video', 'image'][getRandomInt(4)],
      //       title: 'Hello Dribble' + index,
      //       info: 'UI - 概念' + index,
      //       images: [
      //         'https://images.unsplash.com/photo-1564074621995-7c1f9a8ea9a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      //         'https://images.unsplash.com/photo-1564084571423-7894bb30fe80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      //         'https://images.unsplash.com/photo-1556911220-3bdc5f08618e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      //       ]
      //     }
      //   }
      // )
    })
  default:
    return state
  }
}
export default worksApp
