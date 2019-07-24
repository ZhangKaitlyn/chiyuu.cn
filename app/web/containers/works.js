import { connect } from 'react-redux'
import WorksList from '../components/WorksList'

const mapStateToProps = state => ({
    works: getVisibleWorks(state.works, state.workTypeFilter)
})

const mapDispatchToProps = (dispatch) => {
    return {
        getWorks: () => {
            dispatch(getWorks())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorksList)