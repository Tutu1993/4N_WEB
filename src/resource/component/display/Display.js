import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'
import style from 'cssDir/display/display.css'
import Functionality from 'componentDir/display/Functionality.js'
import Mechanism from 'componentDir/display/Mechanism.js'
import Specific from 'componentDir/display/Specific.js'
import Watchmaking from 'componentDir/display/Watchmaking.js'

class DisplayContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null,
		}
		this.handleScroll = this.handleScroll.bind(this)
	}
	componentDidMount() {
		this.setState({
			skrollr: skrollr.init(),
		})
		delay(0).then(() => {
			const { lastPage } = this.props
			if (lastPage !== '') {
				if (lastPage !== '01-display') {
					console.log('F5')
				}
			}
			// const { loader, loaderToNext, loaderToReset } = this.props
			// if (loader.loader === null) {
			// 	const date = ['01', '显示']
			// 	loaderToNext(date)
			// 	delay(3000).then(() => {
			// 		loaderToReset(date)
			// 	})
			// }
			this.state.skrollr.setScrollTop(400)
			addScrollHandler(this.handleScroll)
		})
	}
	componentWillUnmount() {
		this.state.skrollr.destroy()
		this.setState({
			skrollr: null,
		})
		removeScrollHandler(this.handleScroll)
		this.props.updateLastPage('01-display')
	}
	handleScroll() {
		if (this.state.skrollr.getScrollTop() < 100) {
			// const { loader, loaderToNext, loaderToReset } = this.props
			// if (loader.loader === null) {
			// 	const date = ['00', '欢迎']
			// 	loaderToNext(date)
			// 	delay(3000).then(() => {
			// 		loaderToReset(date)
			// 		history.push('/')
			// 	})
			// }
		}
		if (this.state.skrollr.getScrollTop() > 13214) {
			// const { loader, loaderToNext, loaderToReset } = this.props
			// if (loader.loader === null) {
			// 	const date = ['02', '动画']
			// 	loaderToNext(date)
			// 	delay(3000).then(() => {
			// 		loaderToReset(date)
			// 		history.push('/')
			// 	})
			// }
		}
	}
	render() {
		return (
			<div className={ style.box }>
				{ Functionality }
				{ Mechanism }
				{ Specific }
				{ Watchmaking }
				<div className={ style.cover } data-0="opacity: 0.8;" data-400="opacity: 0;" data-12914="opacity: 0;" data-13314="opacity: 0.8;"></div>
			</div>
		)
	}
}

DisplayContainer.propTypes = {
	lastPage: PropTypes.string.isRequired,
	loader: PropTypes.object.isRequired,
	loaderToNext: PropTypes.func.isRequired,
	loaderToReset: PropTypes.func.isRequired,
	updateLastPage: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		lastPage: state.lastPage,
		loader: state.loader,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		loaderToNext: (...args) => store.dispatch(loaderToNext(...args)),
		loaderToReset: (...args) => store.dispatch(loaderToReset(...args)),
		updateLastPage: (...args) => store.dispatch(updateLastPage(...args)),
	}
}
const Display = connect(
	mapStateToProps,
	mapDispatchToProps
)(DisplayContainer)

export default Display
