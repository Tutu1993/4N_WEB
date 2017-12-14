import { Link } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'
import { toggleModalPresse, toggleModalContact, closeModal } from 'jsDir/action.js'
import { connect } from 'react-redux'
import style from 'cssDir/global/footer.css'

class FooterContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { modal, toggleModalPresse, toggleModalContact, closeModal } = this.props
		const links = ['/01-display', '/news', '/collection', '/retailers']
		const address = ['4N-MVT01/D01', '新闻', '集', '零售商']
		const listLinkss = links.map((link, index) => {
			if (modal.modal === null) {
				if (history.location.pathname === link) {
					return <Link to={ link } key={ index } className={ style.active }>{ address[index] }</Link>
				} else {
					return <Link to={ link } key={ index }>{ address[index] }</Link>
				}
			} else {
				if (history.location.pathname === link) {
					return <Link to={ link } key={ index } className={ style.active } onClick={ closeModal }>{ address[index] }</Link>
				} else {
					return <Link to={ link } key={ index } onClick={ closeModal }>{ address[index] }</Link>
				}
			}

		})
		const modalName = ['文章媒体', '联系']
		const listModals = modalName.map((value, index) => {
			if (index === 0) {
				if (modal.modal === 'presse') {
					return <a onClick={ toggleModalPresse } key={ index } className={ style.active }>{ value }</a>
				} else {
					return <a onClick={ toggleModalPresse } key={ index }>{ value }</a>
				}
			} else {
				if (modal.modal === 'contact') {
					return <a onClick={ toggleModalContact } key={ index } className={ style.active }>{ value }</a>
				} else {
					return <a onClick={ toggleModalContact } key={ index }>{ value }</a>
				}
			}
		})
		return (
			<footer className={ style.footer }>
				<div className={ style.link }>
					{ listLinkss }
					{ listModals }
				</div>
			</footer>
		)
	}
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
