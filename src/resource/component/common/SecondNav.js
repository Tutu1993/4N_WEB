import { delay } from 'vendorDir/function.js'
import { Link } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'
import { closeModal } from 'jsDir/action.js'
import { loaderToNext } from 'jsDir/action.js'
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
			return '03-精致'
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
		const { modal, closeModal } = this.props
		const arr = e.target.href.split('/')
		if (arr[arr.length - 1] === history.location.pathname.split('/')[1]) {
			if (modal.modal === null) {
				return
			} else {
				closeModal()
			}
		} else {
			const { loader, loaderToNext } = this.props
			const data = switchActive(arr[arr.length - 1]).split('-')
			for (let obj of e.target.parentNode.childNodes) {
				if (obj.classList.value !== '') {
					obj.classList.remove("active");
				}
			}
			e.target.classList.add('active')
			if (modal.modal === null) {
				if (loader.loader === null) {
					loaderToNext(data)
					delay(1500).then(() => {
						history.push('/' + arr[arr.length - 1])
					})
				}
			} else {
				closeModal()
				if (loader.loader === null) {
					delay(300).then(() => {
						loaderToNext(data)
					})
					delay(1500).then(() => {
						history.push('/' + arr[arr.length - 1])
					})
				}
			}
		}
	}
	render() {
		const links = ['/01-display', '/02-animation', '/03-sophistication', '/04-design']
		const pathname = history.location.pathname
		const { modal, closeModal } = this.props
		const linksList = links.map((link, index) => {
			if (modal.modal === null ) {
				if (pathname === link) {
					return <Link to={ link } className="active" key={ index }></Link>
				} else {
					return <Link to={ link } onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut } key={ index } onClick={ this.handleClick }></Link>
				}
			} else {
				if (pathname === link) {
					return <Link to={ link } className="active" onClick={ this.handleClick } key={ index }></Link>
				} else {
					return <Link to={ link } onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut } key={ index } onClick={ this.handleClick }></Link>
				}
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
	modal: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
	loaderToNext: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		loader: state.loader,
		modal: state.modal,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => store.dispatch(closeModal()),
		loaderToNext: (...args) => store.dispatch(loaderToNext(...args)),
	}
}
const SecondNav = connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondNavContainer)

export default SecondNav
