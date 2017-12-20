import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'
import style from 'cssDir/display/display.css'

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
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['00', '欢迎']
				loaderToNext(date)
				delay(3000).then(() => {
					loaderToReset(date)
					history.push('/')
				})
			}
		}
		console.log(this.state.skrollr.getScrollTop())
	}
	render() {
		return (
			<div className={ style.box }>
				<div className={ style.functionality }>
					<div calssName={ style.f_box }></div>
					<div className={ style.f_cover } data-0="opacity: 1;" data-300="opacity: 0; display: block;" data-350="display: none"></div>
				</div>
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
