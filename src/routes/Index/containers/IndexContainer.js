import { connect } from 'react-redux'
import Index from '../components/Index'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  imagizer: state.imagizer
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
