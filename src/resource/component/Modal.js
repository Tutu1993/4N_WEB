import { connect } from 'react-redux'
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
		const { modal } = this.props
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

		if (modal === null) {
			display = null
		} else {
			if (modal === 'presse') {
				display = (
					<div>
						<div className={ style.modal }></div>
						<div className={ style.content }>
							<div className={ style.close }></div>
							{ presseList }
						</div>
					</div>
				)
			} else if (modal === 'contact') {
				display = (
					<div>
						<div className={ style.modal }></div>
						<div className={ style.content }>
							<div className={ style.close }></div>
							{ contactList }
						</div>
					</div>
				)
			}
		}
		return (
			<div>
				{ display }
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		modal: state.modal,
	}
}
const Modal = connect(
	mapStateToProps
)(ModalContainer)

export default Modal
