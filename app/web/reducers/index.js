import { GET_WORKS } from '../actions'

const initialState = {
    workTypeFilter: 'all',
    works: []
};

function worksApp(state = initialState, action) {
    // 这里暂不处理任何 action，
    // 仅返回传入的 state。
    switch (action.type) {
        case GET_WORKS:
            return Object.assign({}, state, {
                works: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => {
                    return {
                        id: index,
                        type: ['gif', 'multiple', 'video', 'image'][getRandomInt(4)],
                        title: 'Hello Dribble' + index,
                        info: 'UI - 概念' + index
                    }
                })
            })
        default:
            return state
    }
}
export default worksApp