import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'

require('cssDir/sophistication/sophistication.css')
import SecondNav from 'componentDir/common/SecondNav.js'
import GlobalCover from 'componentDir/common/GlobalCover.js'
import Create from 'componentDir/sophistication/Create.js'

class SophisticationContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null,
			toggleText: false,
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
				if (lastPage !== '/03-sophistication') {
					const { loader, loaderToNext, loaderToReset } = this.props
					if (loader.loader === null) {
						const date = ['03', '精致']
						loaderToNext(date)
						delay(1000).then(() => {
							this.state.skrollr.setScrollTop(400)
						})
						delay(1500).then(() => {
							loaderToReset(date)
						})
					} else {
						const date = ['03', '精致']
						this.state.skrollr.setScrollTop(400)
						loaderToReset(date)
					}
				}
			}
			addScrollHandler(this.handleScroll)
		})
	}
	componentWillUnmount() {
		this.state.skrollr.destroy()
		this.setState({
			skrollr: null,
		})
		removeScrollHandler(this.handleScroll)
		this.props.updateLastPage('/03-sophistication')
	}
	handleScroll() {
		if (this.state.skrollr.getScrollTop() > 1500) {
			if (!this.state.toggleText) {
				this.setState({
					toggleText: true
				})
			}
		} else {
			if (this.state.toggleText) {
				this.setState({
					toggleText: false
				})
			}
		}
		console.log(this.state.toggleText)
		// if (this.state.skrollr.getScrollTop() < 100) {
		// 	const { loader, loaderToNext, loaderToReset } = this.props
		// 	if (loader.loader === null) {
		// 		const date = ['02', '动画']
		// 		loaderToNext(date)
		// 		delay(1500).then(() => {
		// 			history.push('/02-animation')
		// 		})
		// 	}
		// }
		// if (this.state.skrollr.getScrollTop() > 4100) {
		// 	const { loader, loaderToNext, loaderToReset } = this.props
		// 	if (loader.loader === null) {
		// 		const date = ['04', '设计']
		// 		loaderToNext(date)
		// 		delay(1500).then(() => {
		// 			history.push('/04-design')
		// 		})
		// 	}
		// }
	}
	render() {
		return (
			<div className="sophistication-box">
				<SecondNav />
				<Create isToggle={ this.state.toggleText }/>
				<GlobalCover data-0="opacity: 0.8;" data-400="opacity: 0;" data-3800="opacity: 0;" data-4200="opacity: 0.8;" />
			</div>
		)
	}
}

SophisticationContainer.propTypes = {
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
const Sophistication = connect(
	mapStateToProps,
	mapDispatchToProps
)(SophisticationContainer)

export default Sophistication
