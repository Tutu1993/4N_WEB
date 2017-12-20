import { delay, regScroll, removeScrollHandler } from 'vendorDir/function.js'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset, updateLastPage } from 'jsDir/action.js'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition';

class Display01Container extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			skrollr: null
		}
	}
	componentDidMount() {
		this.setState({
			skrollr: skrollr.init(),
		})
		// delay(0).then(() => {
		// 	const { lastPage, loader, loaderToNext, loaderToReset } = this.props
		// 	if (lastPage !== null) {
		// 		if (loader.loader === null) {
		// 			const date = ['01', '欢迎']
		// 			loaderToNext(date)
		// 			this.state.skrollr.setScrollTop(0)
		// 			delay(3000).then(() => {
		// 				loaderToReset(date)
		// 			})
		// 		}
		// 	}
		// 	regScroll(this.handleScroll)
		// })
	}
	componentWillUnmount() {
		this.state.skrollr.destroy()
		this.setState({
			skrollr: null
		})
		this.props.updateLastPage('01-display')
	}
	render() {
		return (
			<div>
				Hello World!
			</div>
		)
	}
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
const Display01 = connect(
	mapStateToProps,
	mapDispatchToProps
)(Display01Container)

export default Display01
