import { store } from 'jsDir/store.js'
import { closeModal } from 'jsDir/action.js'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition';
import style from 'cssDir/global/modal.css'

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
		const presseList = (
			<div className={ style.presse }>
				<h1>文章媒体</h1>
				<div className={ style.click }>
					<span>
						<a href="mailto:contactpress@4-n.fr&#9;" target="_blank">contactpress@4-n.fr</a>
					</span>
					<span>文章媒体：
						<a href="http://www.4nparis.com/press/presskit4N_2016_texts.zip">评论文章</a>&nbsp;/&nbsp;
						<a href="http://www.4nparis.com/press/presskit4N_2016_pictures.zip">像片</a>&nbsp;/&nbsp;
						<a href="http://www.4nparis.com/press/presskit4N_2016_videos.zip">短片</a>
					</span>
					<span>
						<a id="a-news-letter" onClick={ this.handleOpacity }>预定4N的新闻通讯</a>
					</span>
				</div>
				<div className={ style.form }>
					<span>预定4N的新闻通讯</span>
					<form action="/interface/post.php" method="post">
						<input type="text" name="email" placeholder="email" />
						<input type="submit" name="submit" value="OK" />
					</form>
				</div>
			</div>
		)
		const contactList = (
			<div className={ style.contact }>
				<h1>联系</h1>
				<div>
					<a href="mailto:contact@4-n.fr&#9;" target="_blank">contactpress@4-n.fr</a>
					<span>7, Passage des charbonniers</span>
					<span>75015 PARIS - FRANCE</span>
					<span>+33 6 08 78 88 90</span>
				</div>
			</div>
		)
		let display

		if (modal.modal === null) {
			display = null
		} else {
			if (modal.modal === 'presse') {
				display = (
					<div>
						<div className={ style.modal } onClick={ closeModal }></div>
						<div className={ style.content }>
							<div className={ style.close } onClick={ closeModal }></div>
							{ presseList }
						</div>
					</div>
				)
			} else if (modal.modal === 'contact') {
				display = (
					<div>
						<div className={ style.modal } onClick={ closeModal }></div>
						<div className={ style.content }>
							<div className={ style.close } onClick={ closeModal }></div>
							{ contactList }
						</div>
					</div>
				)
			}
		}
		return (
			<div>
				<Transition in={ modal.in } timeout={ duration }>
					{(state) => (
						<div className={style.fixed} style={ Object.assign({}, defaultStyle, transitionStyles[state]) }>
							{ display }
						</div>
					)}
				</Transition>
			</div>
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
		closeModal: () => store.dispatch(closeModal()),
	}
}
const Modal = connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalContainer)

export default Modal
