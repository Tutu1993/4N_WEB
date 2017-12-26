import { delay } from 'vendorDir/function.js'
import { Link } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'
import { toggleModalPresse, toggleModalContact, closeModal } from 'jsDir/action.js'
import { loaderToNext } from 'jsDir/action.js'
import { connect } from 'react-redux'

require('cssDir/global/footer.css')

class FooterContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e) {
		e.preventDefault()
		const { modal, loader, loaderToNext, closeModal } = this.props
		if (modal.modal === null) {
			if (loader.loader === null) {
				loaderToNext(['01', '显示'])
				delay(1500).then(() => {
					history.push('/01-display')
				})
			}
		} else {
			closeModal()
			if (loader.loader === null) {
				delay(300).then(() => {
					loaderToNext(['01', '显示'])
				})
				delay(1500).then(() => {
					history.push('/01-display')
				})
			}
		}
	}
	render() {
		const { modal, toggleModalPresse, toggleModalContact, closeModal } = this.props
		const links = ['/01-display', '/news', '/collection', '/retailers']
		const address = ['4N-MVT01/D01', '新闻', '集', '零售商']
		const pathname = history.location.pathname
		const linksList = links.map((link, index) => {
			if (modal.modal === null) {
				if (pathname === link) {
					return <Link to={ link } key={ index } className="active">{ address[index] }</Link>
				} else {
					if (link === '/01-display') {
						if (pathname === '/02-animation' || pathname === '03-sophistication' || pathname === '04-design') {
							return <Link to={ link } key={ index } className="active" onClick={ this.handleClick }>{ address[index] }</Link>
						} else {
							return <Link to={ link } key={ index } onClick={ this.handleClick }>{ address[index] }</Link>
						}
					} else {
						return <Link to={ link } key={ index }>{ address[index] }</Link>
					}
				}
			} else {
				if (pathname === link) {
					return <Link to={ link } key={ index } className="active" onClick={ closeModal }>{ address[index] }</Link>
				} else {
					if (link === '/01-display') {
						if (pathname === '/02-animation' || pathname === '03-sophistication' || pathname === '04-design') {
							return <Link to={ link } key={ index } className="active" onClick={ this.handleClick }>{ address[index] }</Link>
						} else {
							return <Link to={ link } key={ index } onClick={ this.handleClick }>{ address[index] }</Link>
						}
					} else {
						return <Link to={ link } key={ index } onClick={ closeModal }>{ address[index] }</Link>
					}
				}
			}
		})
		const modalName = ['文章媒体', '联系']
		const modalsList = modalName.map((value, index) => {
			if (index === 0) {
				if (modal.modal === 'presse') {
					return <a onClick={ toggleModalPresse } key={ index } className="active">{ value }</a>
				} else {
					return <a onClick={ toggleModalPresse } key={ index }>{ value }</a>
				}
			} else {
				if (modal.modal === 'contact') {
					return <a onClick={ toggleModalContact } key={ index } className="active">{ value }</a>
				} else {
					return <a onClick={ toggleModalContact } key={ index }>{ value }</a>
				}
			}
		})
		return (
			<footer className="global-footer">
				<div className="gf-link">
					{ linksList }
					{ modalsList }
				</div>
			</footer>
		)
	}
}

FooterContainer.propTypes = {
	routerReducer: PropTypes.object.isRequired,
	modal: PropTypes.object.isRequired,
	loader: PropTypes.object.isRequired,
	toggleModalPresse: PropTypes.func.isRequired,
	toggleModalContact: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
	loaderToNext: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		routerReducer: state.routerReducer,
		modal: state.modal,
		loader: state.loader,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		toggleModalPresse: () => store.dispatch(toggleModalPresse()),
		toggleModalContact: () => store.dispatch(toggleModalContact()),
		closeModal: () => store.dispatch(closeModal()),
		loaderToNext: (...args) => store.dispatch(loaderToNext(...args)),
	}
}
const Footer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FooterContainer)

export default Footer
