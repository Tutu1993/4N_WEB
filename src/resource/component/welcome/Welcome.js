import { delay, addScrollHandler, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition'

require('cssDir/welcome/welcome.css')
import NewsList from 'componentDir/welcome/NewsList.js'

class WelcomeContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null,
			invite: false,
			top: null,
		}
		this.handleScroll = this.handleScroll.bind(this)
	}
	componentDidMount() {
		this.setState({
			skrollr: skrollr.init(),
		}, () => {
			this.setState({
				top: this.state.skrollr.getScrollTop(),
				invite: true,
			})
		})
		delay(0).then(() => {
			const { lastPage } = this.props
			if (lastPage !== '') {
				if (lastPage !== 'welcome') {
					const { loader, loaderToNext, loaderToReset } = this.props
					if (loader.loader === null) {
						const date = ['00', '欢迎']
						loaderToNext(date)
						delay(1000).then(() => {
							this.state.skrollr.setScrollTop(0)
						})
						delay(1500).then(() => {
							loaderToReset(date)
						})
					} else {
						const date = ['00', '欢迎']
						this.state.skrollr.setScrollTop(0)
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
			invite: false,
			top: null,
		})
		removeScrollHandler(this.handleScroll)
		this.props.updateLastPage('welcome')
	}
	handleScroll() {
		if (this.state.invite) {
			if (Math.abs(this.state.top - this.state.skrollr.getScrollTop()) > 299) {
				this.setState({
					invite: false,
				})
			}
		}
		if (this.state.skrollr.getScrollTop() > 5900) {
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['01', '显示']
				loaderToNext(date)
				delay(1500).then(() => {
					history.push('/01-display')
				})
			}
		}
	}
	render() {
		const inviteStyles = {
			exiting: { opacity: 1 },
			exited: { opacity: 0, transition: `opacity .95s ease-in-out` },
		}
		return (
			<div className="welcome-box">
				<div className="wb-hello" data-0="top: 0%" data-400="top: -100%">
					<span>欢迎4N网站</span>
				</div>
				<div className="wb-img" data-0="left: -850px;" data-800="left: 0px;"></div>
				<div className="wb-lists" data-800="left: 100%; margin-left: 0px;" data-4800="left: 0%; margin-left: -1951px;">
					{ NewsList }
				</div>
				<div className="wb-cover" data-4800="top: 100%;" data-5800="top: 0%;" data-6200="top: 0%;">
					<h1><span>4N</span>-MVT<span>01</span>/D<span>01</span></h1>
				</div>
				<Transition in={ this.state.invite } timeout={ 50 }>
					{(state) => (
						<div className="wb-invite" style={ Object.assign({}, inviteStyles[state]) }>
							<h4>SCROLL</h4>
							<h5>4N-MVT01/D01</h5>
							<div className="wb-arrow"></div>
						</div>
					)}
				</Transition>
			</div>
		)
	}
}

WelcomeContainer.propTypes = {
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
const Welcome = connect(
	mapStateToProps,
	mapDispatchToProps
)(WelcomeContainer)

export default Welcome
