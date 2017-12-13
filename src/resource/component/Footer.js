import { Link } from 'react-router-dom'
import { store, history } from 'jsDir/store.js'
import { modalToPresse, modalToContact, modalToReset } from 'jsDir/action.js'
import { connect } from 'react-redux'
import style from 'cssDir/global/footer.css'

class FooterContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { modal, modalToPresse, modalToContact, modalToReset } = this.props
		const links = ['/01-display', '/news', '/collection', '/retailers']
		const address = ['4N-MVT01/D01', '新闻', '集', '零售商']
		const listLinkss = links.map((link, index) => {
			if (history.location.pathname === link) {
				return <Link to={ link } key={ index } className={ style.active }>{ address[index] }</Link>
			} else {
				return <Link to={ link } key={ index }>{ address[index] }</Link>
			}
		})
		const modalName = ['文章媒体', '联系']
		const listModals = modalName.map((value, index) => {
			if (index === 0) {
				if (modal === 'presse') {
					return <a onClick={ modalToReset } key={ index } className={ style.active }>{ value }</a>
				} else {
					return <a onClick={ modalToPresse } key={ index }>{ value }</a>
				}
			} else {
				if (modal === 'contact') {
					return <a onClick={ modalToReset } key={ index } className={ style.active }>{ value }</a>
				} else {
					return <a onClick={ modalToContact } key={ index }>{ value }</a>
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
		modal: state.modal,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		modalToPresse: () => store.dispatch(modalToPresse()),
		modalToContact: () => store.dispatch(modalToContact()),
		modalToReset: () => store.dispatch(modalToReset()),
	}
}
const Footer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FooterContainer)

export default Footer
