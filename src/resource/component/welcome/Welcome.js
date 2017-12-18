import { delay } from 'vendorDir/function.js'
import { store } from 'jsDir/store.js'
import { loaderToNext, loaderToReset } from 'jsDir/action.js'
import { connect } from 'react-redux'
import style from 'cssDir/welcome/welcome.css'
import NewsList from 'componentDir/welcome/NewsList.js'

class WelcomeContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null
		}
		this.handleWheel = this.handleWheel.bind(this)
	}
	componentDidMount() {
		this.setState({
			skrollr: skrollr.init()
		})
	}
	componentWillUnmount() {
		this.state.skrollr.destroy()
		this.setState({
			skrollr: null
		})
	}
	handleWheel() {
		const top = this.state.skrollr.getScrollTop()
		const { loader, loaderToNext, loaderToReset } = this.props
		if (top > 5720) {
			if (loader.loader === null) {
				loaderToNext()
				delay(3000).then(() => {
					loaderToReset()
				})
			}
		}
	}
	render() {
		return (
			<div className={ style.box } onWheel={ this.handleWheel } id="index">
				<div className={ style.welcome } data-0="top: 0%" data-400="top: -100%">
					<span>欢迎4N网站</span>
				</div>
				<div className={ style.welcome_img } data-0="left: -850px;" data-800="left: 0px;"></div>
				<div className={ style.list_box } data-800="left: 100%; margin-left: 0px;" data-4800="left: 0%; margin-left: -1951px;">
					{ NewsList }
				</div>
				<div className={ style.cover } data-4800="top: 100%;" data-5800="top: 0%;" data-6200="top: 0%;">
					<h1><span>4N</span>-MVT<span>01</span>/D<span>01</span></h1>
				</div>
			</div>
		)
	}
}

WelcomeContainer.propTypes = {
	loader: PropTypes.object.isRequired,
	loaderToNext: PropTypes.func.isRequired,
	loaderToReset: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		loader: state.loader,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		loaderToNext: () => store.dispatch(loaderToNext()),
		loaderToReset: () => store.dispatch(loaderToReset()),
	}
}
const Welcome = connect(
	mapStateToProps,
	mapDispatchToProps
)(WelcomeContainer)

export default Welcome
