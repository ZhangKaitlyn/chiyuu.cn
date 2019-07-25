import { connect } from 'react-redux'
import WorksList from '../components/WorksList'
import { getWorks } from '@/actions'

const mapStateToProps = state => ({
  works: state.works
})

const mapDispatchToProps = dispatch => {
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
