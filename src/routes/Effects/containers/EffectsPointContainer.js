import { connect } from 'react-redux'
import EffectsPoint from '../components/EffectsPoint'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  imagizer: state.imagizer
})

export default connect(mapStateToProps, mapDispatchToProps)(EffectsPoint)
