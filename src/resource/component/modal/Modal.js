import { store } from 'jsDir/store.js'
import { closeModal } from 'jsDir/action.js'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition';
import style from 'cssDir/global/modal/modal.css'
import PresseList from 'componentDir/modal/PresseList.js'
import ContactList from 'componentDir/modal/ContactList.js'

class ModalContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleOpacity = this.handleOpacity.bind(this)
	}
	handleOpacity(e) {
		e.target.parentNode.parentNode.style.opacity = '0'
		e.target.parentNode.parentNode.style.zIndex = '-1'
		e.target.parentNode.parentNode.nextSibling.style.opacity = '1'
		e.target.parentNode.parentNode.nextSibling.style.zIndex = '999'
	}
	render() {
		const { modal, closeModal } = this.props
		const duration = 300
		const defaultStyle = {
			display: modal.modal ? 'block' : 'none',
			opacity: 0,
			transition: `opacity ${duration}ms ease-in-out`,
		}
		const transitionStyles = {
			entering: { opacity: 0 },
			entered:  { opacity: 1 },
		}
		return (
			<Transition in={ modal.in } timeout={ duration }>
				{(state) => (
					modal.modal ? (
						(modal.modal === 'presse') ? (
							<div className={style.fixed} style={ Object.assign({}, defaultStyle, transitionStyles[state]) }>
								<div className={ style.modal } onClick={ closeModal }></div>
								<div className={ style.content }>
									<div className={ style.close } onClick={ closeModal }></div>
									<PresseList clickFunc={ this.handleOpacity } />
								</div>
							</div>
						) : (
							<div className={style.fixed} style={ Object.assign({}, defaultStyle, transitionStyles[state]) }>
								<div className={ style.modal } onClick={ closeModal }></div>
								<div className={ style.content }>
									<div className={ style.close } onClick={ closeModal }></div>
									{ ContactList }
								</div>
							</div>
						)
					) : null
				)}
			</Transition>
		)
	}
}

ModalContainer.propTypes = {
	modal: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
	return {
		modal: state.modal,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => store.dispatch(closeModal()),
	}
}
const Modal = connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer)

export default Modal
