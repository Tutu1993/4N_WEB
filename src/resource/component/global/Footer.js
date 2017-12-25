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
	}
	handleClick(e) {
		e.preventDefault()
		store.dispatch(loaderToNext(['01', '显示']))
		delay(1500).then(() => {
			history.push('/01-display')
		})
	}
	render() {
		const { modal, toggleModalPresse, toggleModalContact, closeModal } = this.props
		const links = ['/01-display', '/news', '/collection', '/retailers']
		const address = ['4N-MVT01/D01', '新闻', '集', '零售商']
		const linksList = links.map((link, index) => {
			if (modal.modal === null) {
				if (history.location.pathname === link) {
					return <Link to={ link } key={ index } className="active">{ address[index] }</Link>
				} else {
					if (link === '/01-display') {
						return <Link to={ link } key={ index } onClick={ this.handleClick }>{ address[index] }</Link>
					} else {
						return <Link to={ link } key={ index }>{ address[index] }</Link>
					}
				}
			} else {
				if (history.location.pathname === link) {
					return <Link to={ link } key={ index } className="active" onClick={ closeModal }>{ address[index] }</Link>
				} else {
					return <Link to={ link } key={ index } onClick={ closeModal }>{ address[index] }</Link>
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
	modal: PropTypes.object.isRequired,
	toggleModalPresse: PropTypes.func.isRequired,
	toggleModalContact: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		routerReducer: state.routerReducer,
		modal: state.modal,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		toggleModalPresse: () => store.dispatch(toggleModalPresse()),
		toggleModalContact: () => store.dispatch(toggleModalContact()),
		closeModal: () => store.dispatch(closeModal()),
	}
}
const Footer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FooterContainer)

export default Footer
