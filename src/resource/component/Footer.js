import { Link } from 'react-router-dom'
import style from 'cssDir/global/footer.css'

class Footer extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<footer className={ style.footer }>
				<div className={ style.link }>
					<Link to="/">4N-MVT01/D01</Link>
					<Link to="/">新闻</Link>
					<Link to="/">集</Link>
					<Link to="/">零售商</Link>
					<a onClick={() => console.log('apple')}>文章媒体</a>
					<a onClick={() => console.log('apple')}>联系</a>
				</div>
			</footer>
		)
	}
}

export default Footer
