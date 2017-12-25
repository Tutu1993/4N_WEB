import { delay } from 'vendorDir/function.js'
import { Link } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'
import { loaderToNext, loaderToReset } from 'jsDir/action.js'
import { connect } from 'react-redux'

require('cssDir/common/secondNav.css')

const switchActive = href => {
	switch(href) {
		case '01-display':
			return '01-显示'
			break
		case '02-animation':
			return '02-动画'
			break
		case '03-sophistication':
			return '03-孙志明'
			break
		case '04-design':
			return '04-设计'
			break
		default:
			return ''
	}
}

class SecondNavContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: switchActive(history.location.pathname.split('/')[1]),
		}
		this.handleMouseOver = this.handleMouseOver.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleMouseOver(e) {
		const arr = e.target.href.split('/')
		this.setState({
			title: switchActive(arr[arr.length - 1])
		})
	}
	handleMouseOut() {
		this.setState({
			title: switchActive(history.location.pathname.split('/')[1])
		})
	}
	handleClick(e) {
		e.preventDefault()
		const arr = e.target.href.split('/')
		if (arr[arr.length - 1] === history.location.pathname.split('/')[1]) {
			return
		} else {
			const { loader, loaderToNext, loaderToReset } = this.props
			if (loader.loader === null) {
				const date = ['01', '显示']
				loaderToNext(date)
				delay(1000).then(() => {
					history.push('/01-display')
				})
			}
		}
	}
	render() {
		const links = ['/01-display', '/02-animation', '/03-sophistication', '/04-design']
		const linksList = links.map((link, index) => {
			if (history.location.pathname === link) {
				return <Link to={ link } className="active" onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut } onClick={ this.handleClick } key={ index }></Link>
			} else {
				return <Link to={ link } onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut } key={ index }></Link>
			}
		})
		return (
			<div className="second-nav">
				<div className="sn-box">
					{ linksList }
				</div>
				<div className="sn-text">{ this.state.title }</div>
			</div>
		)
	}
}

SecondNavContainer.propTypes = {
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
		loaderToNext: (...args) => store.dispatch(loaderToNext(...args)),
		loaderToReset: (...args) => store.dispatch(loaderToReset(...args)),
	}
}
const SecondNav = connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondNavContainer)

export default SecondNav
