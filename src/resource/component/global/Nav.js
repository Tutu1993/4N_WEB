import { delay } from 'vendorDir/function.js'
import { Link } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'
import { closeModal } from 'jsDir/action.js'
import { loaderToNext } from 'jsDir/action.js'
import { connect } from 'react-redux'

require('cssDir/global/nav.css')

class NavContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e) {
		e.preventDefault()
		const { modal, loader, loaderToNext, closeModal } = this.props
		if (modal.modal === null) {
			if (loader.loader === null) {
				loaderToNext(['00', '欢迎'])
				delay(1500).then(() => {
					history.push('/')
				})
			}
		} else {
			closeModal()
			if (loader.loader === null) {
				delay(300).then(() => {
					loaderToNext(['00', '欢迎'])
				})
				delay(1500).then(() => {
					history.push('/')
				})
			}
		}
	}
	render() {
		const { modal, closeModal } = this.props
		const pathname = history.location.pathname
		const logo = (() => {
			if (modal.modal === null) {
				if (pathname === '/') {
					return <Link to="/" className="gn-logo"></Link>
				} else {
					return <Link to="/" className="gn-logo" onClick={ this.handleClick }></Link>
				}
			} else {
				if (pathname === '/') {
					return <Link to="/" className="gn-logo" onClick={ closeModal }></Link>
				} else {
					return <Link to="/" className="gn-logo" onClick={ this.handleClick }></Link>
				}
			}
		})()
		return (
			<nav className="global-nav">
				{ logo }
				<div className="gn-link">
					<a href="https://twitter.com/4N_PARIS" target="_blank" rel="nofollow"></a>
					<a href="https://www.facebook.com/4Nwatches" target="_blank" rel="nofollow"></a>
					<a href="http://www.pinterest.com/francoisquentin/4n" target="_blank" rel="nofollow"></a>
					<a href="http://www.pinterest.com/francoisquentin/4n" target="_blank" rel="nofollow"></a>
					<a href="http://www.youtube.com/user/4Nwatch/videos" target="_blank" rel="nofollow"></a>
				</div>
			</nav>
		)
	}
}

NavContainer.propTypes = {
	modal: PropTypes.object.isRequired,
	loader: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
	loaderToNext: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		modal: state.modal,
		loader: state.loader,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => store.dispatch(closeModal()),
		loaderToNext: (...args) => store.dispatch(loaderToNext(...args)),
	}
}
const Nav = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavContainer)

export default Nav
