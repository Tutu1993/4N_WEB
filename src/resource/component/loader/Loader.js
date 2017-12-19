import { store, history } from 'jsDir/store.js'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition';
import style from 'cssDir/global/loader.css'

class LoaderContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { loader } = this.props
		const defaultStyle = {
			display: loader.loader ? 'block' : 'none',
		}
		const loaderStyles = {
			entering: { top: '100%' },
			entered:  { top: '0%' },
			exiting: { left: '0%' },
			exited: { left: '-100%' }
		}
		return (
			<Transition in={ loader.in } timeout={ 50 }>
				{(state) => (
					loader.loader ? (
						<div className={ style.box } style={ Object.assign({}, defaultStyle, loaderStyles[state]) }>
							<div className={ style.cover }></div>
							<div className={ style.content }>
								<h4>{ loader.loader[0] }<br /><span>{ loader.loader[1] }</span></h4>
								<div className={ style.gif }></div>
							</div>
						</div>
					) : null
				)}
			</Transition>
		)
	}
}

LoaderContainer.propTypes = {
	loader: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
	return {
		loader: state.loader,
	}
}
const Loader = connect(
	mapStateToProps,
)(LoaderContainer)

export default Loader
