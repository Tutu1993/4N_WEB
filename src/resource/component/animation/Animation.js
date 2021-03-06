import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'

require('cssDir/animation/animation.css')
import SecondNav from 'componentDir/common/SecondNav.js'
import GlobalCover from 'componentDir/common/GlobalCover.js'
import VideosList from 'componentDir/animation/VideosList.js'

class AnimationContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null,
			offsetWidth: document.body.offsetWidth - 3785,
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
				if (lastPage !== '/02-animation') {
					const { loader, loaderToNext, loaderToReset } = this.props
					if (loader.loader === null) {
						const date = ['02', '动画']
						loaderToNext(date)
						delay(1000).then(() => {
							this.state.skrollr.setScrollTop(400)
						})
						delay(1500).then(() => {
							loaderToReset(date)
						})
					} else {
						const date = ['02', '动画']
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
			offsetWidth: null,
		})
		removeScrollHandler(this.handleScroll)
		this.props.updateLastPage('/02-animation')
	}
	handleScroll() {
		if (this.state.skrollr.getScrollTop() < 100) {
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['01', '显示']
				loaderToNext(date)
				delay(1500).then(() => {
					history.push('/01-display')
				})
			}
		}
		if (this.state.skrollr.getScrollTop() > 4100) {
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['03', '精致']
				loaderToNext(date)
				delay(1500).then(() => {
					history.push('/03-sophistication')
				})
			}
		}
	}
	render() {
		return (
			<div className="animation-box">
				<SecondNav />
				<div className="ab-content" data-400="left: 0px;" data-3800={ "left: " + this.state.offsetWidth + "px;" }>
					{ VideosList }
				</div>
				<GlobalCover data-0="opacity: 0.8;" data-400="opacity: 0;" data-3800="opacity: 0;" data-4200="opacity: 0.8;" />
			</div>
		)
	}
}

AnimationContainer.propTypes = {
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
const Animation = connect(
	mapStateToProps,
	mapDispatchToProps
)(AnimationContainer)

export default Animation
