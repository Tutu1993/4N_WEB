import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'

require('cssDir/animation/animation.css')
import SecondNav from 'componentDir/common/SecondNav.js'
import GlobalCover from 'componentDir/common/GlobalCover.js'

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
					<div className="ab-video">
						<div className="ab-v-box">
							<div className="ab-v-img" style={ {background: "black url('" + require('imgsDir/animation/1.jpg') + "') no-repeat center center"} }></div>
							<div className="ab-v-play"></div>
							<div className="ab-v-text">
								<h2>Animation</h2>
								<p>4N claims a totally new and innovating complication of jumping hours and jumping minutes: each minute, the dial of the MVT-01/D01 comes alive to display the new time.</p>
								<div className="ab-v-logo">
									<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
									<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
								</div>
							</div>
						</div>
					</div>
					<div className="ab-video">
						<div className="ab-v-box">
							<div className="ab-v-img" style={ {background: "black url('" + require('imgsDir/animation/2.jpg') + "') no-repeat center center"} }></div>
							<div className="ab-v-play"></div>
							<div className="ab-v-text">
								<h2>Spectacular</h2>
								<p>Spectacular and surprising,  this watchmaking complication chants time by its perpetual metamorphosis. Every minute, all five discs dedicated to the minutes come alive.  At the passage of hours, these are now the ten discs of the complication which are set in motion.</p>
								<div className="ab-v-logo">
									<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
									<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
								</div>
							</div>
						</div>
					</div>
					<div className="ab-video">
						<div className="ab-v-box">
							<div className="ab-v-img" style={ {background: "black url('" + require('imgsDir/animation/3.jpg') + "') no-repeat center center"} }></div>
							<div className="ab-v-play"></div>
							<div className="ab-v-text">
								<h2>Magic<br />and poetic</h2>
								<p>Echoing to the resonance of the sprung balance which animates the dial, the jumping minutes and hours generate a poetic pulsation during a magic instant, recreated each time.  In successive strata,  the dial displays the subtle complexity of the display mechanism, through its discs carousel.</p>
								<div className="ab-v-logo">
									<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
									<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
								</div>
							</div>
						</div>
					</div>
					<div className="ab-video">
						<div className="ab-v-box">
							<div className="ab-v-img" style={ {background: "black url('" + require('imgsDir/animation/4.jpg') + "') no-repeat center center"} }></div>
							<div className="ab-v-play"></div>
							<div className="ab-v-text">
								<h2>Technical<br />prowess</h2>
								<p>The technical and ergonomic stakes have founded the architecture and design of this complication. Three subset can independently enter in motion at the moment of the hour jump : The hour cage on the left side with its 4 discs, the disc of the tens of minutes at the center, and the minute cage with its 5 discs on the right. This display principle which allows the digital hour to stand majestically at the center of the dial, hides an extremely sophisticated kinematics, protected by several patents. The overall movement contains 520 components with 86 rubies.</p>
								<div className="ab-v-logo">
									<a href="https://twitter.com/4N_PARIS" target="_blank"></a>
									<a href="https://www.facebook.com/4Nwatches" target="_blank"></a>
								</div>
							</div>
						</div>
					</div>
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
